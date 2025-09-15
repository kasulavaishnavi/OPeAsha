function UploadPopup({ onClose }) {
  return (
    <div
      className="position-absolute bottom-22 start-50 translate-middle-x d-flex flex-column align-items-center justify-content-center"
      style={{
        width: "310px",
        height: "150px",
        backgroundColor: "#e8fbf9",
        borderRadius: "30px",
        border: "2px dashed #00b4a8",
        zIndex: 10,
        marginTop: "20px",
      }}
    >
      <button
        className="btn-close position-absolute top-2 end-2"
        onClick={onClose}
      />
      <a href="#" className="text-decoration-none text-success mb-1">
        Drag and drop to upload file
      </a>
      <span className="text-black">Or</span>
      <a href="#" className="text-decoration-none text-success">
        <span className="text-[black]">Share</span> My reports
      </a>
    </div>
  );
}
export default UploadPopup;
