import { decorate, observable } from "mobx";
import instance from "./instance";
import authStore from "./authStore";

class VendorStore {
  vendors = [];
  loading = true;

  fetchVendors = async () => {
    try {
      const response = await instance.get("/vendors");
      this.vendors = response.data;

      this.loading = false;
    } catch (error) {
      console.error(error);
    }
  };

  createVendor = async (newVendor) => {
    try {
      const formData = new FormData();
      for (const key in newVendor) formData.append(key, newVendor[key]);
      const res = await instance.post("/vendors", formData);
      this.vendors.push(res.data);
      // authStore.user.vendorSlug = res.data.slug;
    } catch (error) {
      console.log("this is a create vendor error", error);
    }
  };

  updateVendor = async (updatedVendor) => {
    try {
      // update in the backend
      const formData = new FormData();
      for (const key in updatedVendor) formData.append(key, updatedVendor[key]);

      await instance.put(`/vendors/${updatedVendor.id}`, formData);

      // update in the frontend
      const vendor = this.vendors.find(
        (vendor) => vendor.id === updatedVendor.id
      );
      for (const key in updatedVendor) vendor[key] = updatedVendor[key];
      vendor.image = URL.createObjectURL(updatedVendor.image);
    } catch (error) {
      console.log(error);
    }
  };

  deleteVendor = async (vendorId) => {
    try {
      await instance.delete(`/vendors/${vendorId}`);
      this.vendors = this.vendors.filter((vendor) => vendor.id !== +vendorId);
    } catch (error) {
      console.error(error);
    }
  };
}

decorate(VendorStore, {
  vendors: observable,
  loading: observable,
});

const vendorStore = new VendorStore();
vendorStore.fetchVendors();

export default vendorStore;
