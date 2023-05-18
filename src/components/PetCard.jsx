const PetCard = () => {
  return (
    <div className="mb-4 border border-neutral-950 rounded-lg p-4">
      <h1 className="text-xl font-bold">Nome</h1>
      <div className="w-[90%]">
        <label htmlFor="name">Raça:</label>
        <input
          type="text"
          className="border border-neutral-400 drop-shadow-xl h-6 rounded-[50px] text-base pl-3 py-5 w-full"
          readOnly
        />
      </div>
      <div className="w-[90%]">
        <label htmlFor="name">Porte:</label>
        <input
          type="text"
          className="border border-neutral-400 drop-shadow-xl h-6 rounded-[50px] text-base pl-3 py-5 w-full"
          readOnly
        />
      </div>
      <div className="w-[90%]">
        <label htmlFor="name">Idade:</label>
        <input
          type="text"
          className="border border-neutral-400 drop-shadow-xl h-6 rounded-[50px] text-base pl-3 py-5 w-full"
          readOnly
        />
      </div>
    </div>
  );
};

export default PetCard;
