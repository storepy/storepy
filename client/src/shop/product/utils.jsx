import { StaffService } from '@miq/utils';

class StaffProductService extends StaffService {
  publish(prodSlug) {
    return this.patchPath(`${this.path}${prodSlug}/publish/`, {});
  }

  unpublish(prodSlug) {
    return this.patchPath(`${this.path}${prodSlug}/publish/`, { unpublish: true });
  }

  // ATTR

  postAttribute(prodSlug, values) {
    return this.postPath(`${this.path}${prodSlug}/attribute/new/`, values);
  }

  patchAttribute(prodSlug, attrSlug, values, oldValues) {
    return this.patchPath(`${this.path}${prodSlug}/attribute/${attrSlug}/`, values, oldValues);
  }

  deleteAttribute(prodSlug, attrSlug) {
    return this.deletePath(`${this.path}${prodSlug}/attribute/${attrSlug}/`);
  }

  // PAGE

  patchPage(prodSlug, values, oldValues) {
    return this.patchPath(`${this.path}${prodSlug}/page/`, values, oldValues);
  }

  // COVER

  swapCover(prodSlug, imgSlug) {
    return this.patchPath(`${this.path}${prodSlug}/swap-cover/`, { slug: imgSlug });
  }
}

export const productServices = new StaffProductService('products/');
