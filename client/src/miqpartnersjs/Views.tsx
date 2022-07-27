import * as React from 'react';

import { Button, Loading, Pagination, ViewSection } from '@miq/componentjs';
import { PartnerOnboardForm } from './forms';

import img from './imgs/1.jpg';
import { SharedDataCtx } from '@miq/contextjs';
import Staff from '@miq/staffjs';
import StaffView from '@miq/staffjs/src/Views';
import { Route, Routes } from 'react-router-dom';
import { usePartnerListRequest } from './utils';
import { Response } from '@miq/utiljs';
import { TPartner } from './types';

const PartnerIndexView = () => {
  const { res, loading } = usePartnerListRequest();

  const r = new Response<TPartner>(res);

  if (loading) return <Loading />;
  if (!r.isSuccess) return <div>Something went wrong</div>;

  console.log(r.data);

  return (
    <Staff.View
      title="Partners"
      actions={<div>{r.data.count}</div>}
      footer={<Pagination {...r.data} component={Staff.Link} to className="" />}
    >
      {r.items?.map((p) => {
        const { extra = {} } = p;
        return (
          <Staff.Section
            border
            title={<div className="">{`${p.first_name} ${p.last_name}`}</div>}
            actions={
              <div>
                {extra.age} {extra.size?.toUpperCase()}
              </div>
            }
            key={p.slug}
          >
            <ul className="text-muted text-sm">
              <li>
                <span className="">@{p.ig}</span>
                <span>{p.tt && ` | ${p.tt}`}</span>
              </li>
              <li>
                <span>{p.phone}</span>
                <span>{p.email && ` | ${p.email}`}</span>
              </li>
              <li>
                {extra.wears_lingerie ? `Wears lingerie` : '-'}
                {extra.is_newbie && ` | Newbie`}
              </li>
              <li>{extra.interests?.map((i) => `${i} `)}</li>
            </ul>
          </Staff.Section>
        );
      })}
    </Staff.View>
  );
};

export const PartnerRoutes = () => {
  return (
    <Staff.View>
      <Routes>
        <Route index element={<PartnerIndexView />} />
      </Routes>
    </Staff.View>
  );
};

//
// +++++++++++++++++++++++++++++++ PUBLIC ++++++++++++++++++++++++++++++++++++++++++++++
//

export function PartnerOnboardView() {
  const ctx: any = React.useContext(SharedDataCtx);
  const { partner = {} } = ctx;
  const [open, setOpen] = React.useState(false);

  const hasInstance = partner && partner.slug;

  if (hasInstance) return <Done />;

  return (
    <div className="miq-container center" style={{ padding: '2em 0' }}>
      <ViewSection header={<Hero text="ÊTES-VOUS UNE CRÉATRICE DE CONTENU?" />} footer={disclaimer}>
        <div className="p-1">
          <div className="text- mb-3">
            <p>
              <span className="fw-bold">feminiti</span> est une boutique en ligne qui offre des articles de marques pour
              femme.
            </p>

            <p>
              Rejoins notre team exclusive de partenaires et recois des articles de marque (zara, shein,
              prettylittlething, fashion nova) gratuitement ou à moitié prix.
            </p>

            <p>
              Ton rôle, sera de créer et partager du contenu pour la boutique et participer (parfois) à nos campagnes
              publicitaires.
            </p>
            <p>Pour postuler, merci de remplir le formulaire.</p>
          </div>

          {!open ? (
            <div className="my-2">
              {hasInstance ? (
                <></>
              ) : (
                <Button
                  onClick={() => setOpen(true)}
                  // disabled={partner && partner.slug}
                  className="btn-primary btn-md fw-bold"
                >
                  {`Postuler maintenant`}
                </Button>
              )}
            </div>
          ) : (
            <PartnerOnboardForm />
          )}
        </div>
      </ViewSection>
    </div>
  );
}

const Done = () => (
  <div className="miq-container center" style={{ padding: '2em 0' }}>
    <h1
      className="text-center my-3 border-bottom"
      style={{
        fontFamily: '"Poppins", sans-serif',
        fontSize: '2rem',
        margin: '3em .5em .5em .5em',
      }}
    >
      Merci, vous avez terminé!
    </h1>

    <div className="mb-4 text-center">
      <div style={{ paddingBottom: 250 }}>Nous avons reçu vos réponses avec succès.</div>
      <div>
        <a href="/shop/" className="btn btn-primary btn-md fw-bold">
          Visitez notre catalogue
        </a>
      </div>
    </div>
  </div>
);

const disclaimer = (
  <p className="text-sm text-muted mt-4 p-1">
    *En raison du volume élevé de candidatures que nous recevons, vous ne serez informée que si vous êtes acceptée.
    Sachez que nos programmes ambassadeurs sont susceptibles d'être modifiés à tout moment.
  </p>
);

const Hero = ({ text }: { text: string }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),url(${img})`,
        margin: '3em 1rem',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position: 'relative',
        color: 'wheat',
        height: '250px',
        backgroundRepeat: 'no-repeat',
        borderRadius: '.5rem',
      }}
    >
      <h1
        className="text-center my-3"
        style={{
          fontFamily: '"Poppins", sans-serif',
          fontSize: '2rem',
          margin: '3em .5em',
        }}
      >
        {text}
      </h1>
    </div>
  );
};
