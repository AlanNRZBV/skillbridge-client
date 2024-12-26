// import axios, { AxiosError } from 'axios';
// const axiosApi = axios.create({
//   baseURL: import.meta.env['VITE_API_URL'],
//   timeout: 10000,
// });
// export default axiosApi;
//
// export const getPricing = async () => {
//   try {
//     const response = await axiosApi.get<IPricingPlan>('/plans');
//     return response.data;
//   } catch (e) {
//     if (e instanceof AxiosError) {
//       console.log('AxiosError - Status ', e.status);
//       console.log('AxiosError - Response ', e.response);
//       return;
//     }
//     console.log('=>(loaders.ts:15) ', e);
//   }
// };
