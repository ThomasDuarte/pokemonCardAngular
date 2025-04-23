import { HttpInterceptorFn } from '@angular/common/http';

export const authTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  let requestToSend = req;
  if (token) {
    requestToSend = req.clone({
      headers: req.headers.set('Authorization', `Token ${token}`), // <-- Espace ajouté !
    });
  }
  return next(requestToSend);
};
