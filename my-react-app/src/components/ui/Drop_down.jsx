function DropDownnn() {
  return (
    <div className="join join-vertical w-full  ">
      <div className="collapse collapse-arrow join-item border border-blue-cd ">
        <input type="radio" name="my-accordion-4" defaultChecked />
        <div className="collapse-title text-xl text-black font-medium">
          Bagaimana cara mengunduh sertifikat{" "}
        </div>
        <div className="collapse-content text-black">
          <p>
            Caranya adalah dengan berlanggan premium dan menyelesaikan course &
            quiz sampai akhir
          </p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border  border-blue-cd">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl text-black font-medium">
          Bagaimana cara mengunduh sertifikat{" "}
        </div>
        <div className="collapse-content text-black">
          <p>hello</p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-blue-cd">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium text-black">
          Bagaimana cara mengunduh sertifikat{" "}
        </div>
        <div className="collapse-content text-black">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}
export default DropDownnn;
