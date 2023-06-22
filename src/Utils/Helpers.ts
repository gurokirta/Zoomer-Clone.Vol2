// import jwtDecode, { JwtPayload } from "jwt-decode";

// export const isUserAuthenticated = () => {
//   const key = localStorage.getItem("token");
//   if (!key) return false;
//   const decodedToken = jwtDecode<JwtPayload>(key); // Type assertion to JwtPayload
//   const tokenExpireDate = decodedToken.exp;

//   if (tokenExpireDate === undefined) {
//     return false; // or handle the case when tokenExpireDate is undefined
//   }
//   console.log("token", tokenExpireDate);
//   return Date.now() < tokenExpireDate;
// };

export const isUserAuthenticated = () => {
  const key = localStorage.getItem("token");
  if (!key) return false;
  return Date.now() < Number(new Date(key));
};
