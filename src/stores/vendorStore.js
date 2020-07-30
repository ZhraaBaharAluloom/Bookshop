import { decorate, observable } from "mobx";
import axios from "axios";

class VendorStore {
  vendors = [];
  loading = true;

  fetchVendors = async () => {
    try {
      const response = await axios.get("http://localhost:8000/vendors");
      this.vendors = response.data;
      this.loading = false;
      console.log(
        "VendorStore -> fetchVendors -> response.data",
        response.data
      );
    } catch (error) {
      console.error(error);
    }
  };

  createVendor = async (newVendor) => {
    try {
      const formData = new FormData();
      for (const key in newVendor) formData.append(key, newVendor[key]);
      const res = await axios.post("http://localhost:8000/vendors", formData);
      this.vendors.push(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  updateVendor = async (updatedVendor) => {
    try {
      const formData = new FormData();
      for (const key in updatedVendor) formData.append(key, updatedVendor[key]);
      await axios.put(
        `http://localhost:8000/vendors/${updatedVendor.id}`,
        formData
      );
      const vendor = this.vendors.find(
        (vendor) => vendor.id === updatedVendor.id
      );
      for (const key in vendor) vendor[key] = updatedVendor[key];
    } catch (error) {
      console.log(error);
    }
  };

  deleteVendor = async (vendorId) => {
    try {
      await axios.delete(`http://localhost:8000/vendors/${vendorId}`);
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
