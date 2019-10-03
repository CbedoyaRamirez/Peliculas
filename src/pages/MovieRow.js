import React from "react";
import { InputGroup } from "react-bootstrap";

class MovieRow extends React.Component {
  render() {
    return (
      <table key={this.props.movie.id}>
        <tbody>
          <tr>
            <td>
              <img alt="poster" width="120" src={this.props.movie.Poster} />
            </td>
            <td>
              <h3>{this.props.movie.Title}</h3>
            </td>
            <td>
              <InputGroup.Prepend>
                Agregar a favoritos
                <InputGroup.Checkbox aria-label="Radio button for following text input" />
              </InputGroup.Prepend>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default MovieRow;
