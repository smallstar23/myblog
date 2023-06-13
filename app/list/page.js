import { connectDB } from "@/util/database";

async function List() {
  const db = (await connectDB).db("myblog");
  let result = await db.collection("post").find().toArray();

  return (
    <>
      {result.map((item) => {
        <p>{item.title}</p>;
      })}
    </>
  );
}

export default List;
