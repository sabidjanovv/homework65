import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from "@nestjs/common";
import { Observable } from "rxjs";

@Injectable()
export class AdminCreatorGuard implements CanActivate {
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();

    // // Admin yaratgan foydalanuvchilarga ruxsat beriladi
    // if (req.admin.sub != req.params.id) {
    //   console.log(req.admin.sub, "AND", req);
      
    //   throw new ForbiddenException({
    //     message: "Ruxsat etilmagan admin (adminCreator.guard.ts)",
    //   });
    // }

    // Foydalanuvchi yaratuvchi ekanligini tekshiramiz
    if (req.admin.is_creator !== true) {
      throw new ForbiddenException({
        message: "Sizda bunday huquq yo'q!",
      });
    }

    return true;
  }
}
