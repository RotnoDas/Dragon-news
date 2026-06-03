import Categories from "@/components/categories/Categories";

const getCategories = async () => {
  const response = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await response.json();
  return data.data.news_category;
};
export default async function Home() {
  const categories = await getCategories();
  return (
    <div className="px-37.5 py-12.5 grid grid-cols-12 gap-4">
      <Categories categories={categories}></Categories>
      <div className="bg-green-400 col-span-7">All news</div>
      <div className="bg-yellow-400 col-span-2">Icons</div>
    </div>
  );
}
