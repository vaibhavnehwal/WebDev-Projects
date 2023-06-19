

const Movie = (props) => {
  return (
    <div className = 'Movie'>
      <img src={props.img} alt="" />
      <p>{props.title}</p>
      <p>Year: {props.year}</p>
    </div>
  )
}

export default Movie
