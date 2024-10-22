import Button from "../element/Button";

function Card () {
  return (
    <>
      <div className="card-container">
        <div className="card-header">
          <img src="" alt="" />
        </div>
        <div className="card-body">
          <h1>Card Title</h1>
          <p>Card Description</p>
        </div>
        <div className="card-footer">
          <Button type="button" onClick={() => {}}>
            Delete
          </Button>
        </div>
      </div>
    </>
  )
}

export default Card;