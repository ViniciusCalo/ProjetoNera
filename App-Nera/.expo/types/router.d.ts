/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `` | `/` | `/(tabs)` | `/CreateClass` | `/FractionScreen` | `/FractionScreen2` | `/FractionTrails` | `/HomeTeacher` | `/JoinClassroom` | `/Login` | `/PerfilTeacher` | `/StudentClassroom` | `/StudentEditProfile` | `/StudentProfile` | `/StudentTrails` | `/TeacherClassroom` | `/_sitemap` | `/store` | `/store/classroomSlice` | `/store/userSlice`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
