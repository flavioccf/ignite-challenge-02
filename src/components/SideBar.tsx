import './styles/sidebar.scss';

import { GenreResponseProps, SideBarProps } from '../interfaces/interfaces';
import { Button } from './Button';

export function SideBar({setSelectedGenreId, selectedGenreId, genres}: SideBarProps) {
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map((genre: GenreResponseProps) => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  )
}