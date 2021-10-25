import { useState } from "react";

function Searchbar({ onSubmit }) {
  const [imgName, setImgName] = useState("");

  const handleChange = (e) => {
    setImgName(e.currentTarget.value.toLowerCase().trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imgName.trim() === "") {
      alert("Please, type what do you want to see.");
      return;
    }
    onSubmit(imgName); // отпарвка данных
    setImgName(""); // очищение формы
  };
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          onChange={handleChange}
          value={imgName}
          name="imgName"
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}
// class Searchbar extends Component {
//   state = {
//     imgName: "",
//   };
//   handleChange = (e) => {
//     this.setState({ imgName: e.currentTarget.value.toLowerCase().trim() });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.imgName.trim() === "") {
//       alert("Please, type what do you want to see.");
//       // toast.error("Please, type what do you want to see.");
//       return;
//     }
//     this.props.onSubmit(this.state.imgName); // отпарвка данных

//     this.setState({ imgName: "" }); // очищение формы
//   };
//   render() {
//     return (
//       <header className="Searchbar">
//         <form className="SearchForm" onSubmit={this.handleSubmit}>
//           <button type="submit" className="SearchForm-button">
//             <span className="SearchForm-button-label">Search</span>
//           </button>

//           <input
//             onChange={this.handleChange}
//             value={this.state.imgName}
//             name="imgName"
//             className="SearchForm-input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }
export default Searchbar;
