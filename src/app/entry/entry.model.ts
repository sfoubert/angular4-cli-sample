import { Movie } from '../movie/movie.model';
import { User } from '../user/user.model';
export class Entry {

  constructor(public id: string,
              public user: User,
              public movie: Movie,
              public viewDate: string) {
  }

}
