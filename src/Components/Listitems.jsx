function ListItems() {
  const categories = [
    "All",
    "Music",
    "React routers",
    "Computer programming",
    "Reverberation",
    "Movie musicals",
    "India national cricket team",
    "News",
    "Mixes",
    "1990s",
    "Telugu cinema",
    "Live",
    "Dramedy",
    "Dubbing",
    "Indian soap opera",
    "Cricket",
    "Football",
    "Learn Coding",
    "Technology",
    "Travel",
    "Food",
    "Fitness",
    "Gaming",
    "Education",
    "Science",
    "History",
    "Art",
    "Business",
    "Comedy",
    "Drama",
    "Fashion",
    "Health",
    "Lifestyle",
    "Motivation",
    "Nature",
    "Photography",
    "Politics",
    "Psychology",
    "Sports",
    "Theater",
    "Vlogs",
    "Web Development",
    "Cricket World Cup",
    "Cricket Leagues",
    "Cricket Highlights",
    "Cricket Interviews",
    "Cricket Analysis",
    "Cricket Coaching",
    "Cricket News",
    "Cricket Matches",
    "Podcasts",
    "Automotive",
    "Home Improvement",
    "DIY",
    "Parenting",
    "Relationships",
    "Mindfulness",
    "Investing",
    "Marketing",
    "Pet Care",
    "Real Estate",
    "Interior Design",
  ];

  return (
    <div className="flex overflow-x-auto px-4 py-2 bg-gray-100 hide-scroll-bar">
      <div className="flex space-x-4 flex-nowrap">
        {categories.map((category) => (
          <div
            key={category}
            className="bg-gray-200 hover:bg-gray-300 duration-300 rounded-xl px-4 py-2 font-medium text-gray-700 cursor-pointer whitespace-nowrap"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListItems;
