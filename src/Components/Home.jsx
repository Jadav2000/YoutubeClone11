import { useAuth } from "../contexts/AuthProvider";
import ListItems from "./Listitems";
import Sidebar from "./Sidebar";
import Video from "./Video";

function Home() {
  const { data, loading } = useAuth();
  console.log(data);

  return (
    <div className="flex mt-20">
      <Sidebar className="w-64 p-4 bg-base-200 shadow-lg" />
      <div className="flex-1 h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden bg-base-100">
        <div className="mb-4">
          <ListItems />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-5">
          {!loading &&
            data.map((item) => {
              if (item.type !== "video") return null;
              return (
                <div
                  key={item.id}
                  className="card shadow-lg compact bg-base-100"
                >
                  <Video video={item?.video} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Home;
