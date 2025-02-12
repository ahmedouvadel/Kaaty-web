import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LangService } from '../services/lang.service';

export const langInterceptor: HttpInterceptorFn = (req, next) => {
  const lang = inject(LangService).activeLang;

  
  return next(req);
};
