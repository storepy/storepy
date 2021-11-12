import { StaffService } from "@miq/adminjs";

class StaffProductService extends StaffService {
  // constructor(path) {
  //   super(path);
  // }

  patchPage(prodSlug, values, oldValues) {
    return this.patchPath(`${this.path}${prodSlug}/page/`, values, oldValues);
  }
}

export const productServices = new StaffProductService("products/");
