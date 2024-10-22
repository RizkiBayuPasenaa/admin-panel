import Input from "../element/Input";
// import Button from "../element/Button";

function ModalForm () : JSX.Element {
  return (
    <div className="modal-container">
      <div className="modal-header">
        <h2>Tambah Produk</h2>
      </div>
      <div className="modal-body">
        <form action="">
          <Input type="text" placeholder="Masukan Title Product"/>
          <Input type="text" placeholder="Masukan Title Product"/>
          <Input type="text" placeholder="Masukan Title Product"/>
          <Input type="text" placeholder="Masukan Title Product"/>
        </form>
      </div>
    </div>
  )
}

export default ModalForm;