import Button from "./Button";

export default function Navbar() {
  return (
    <div className="flex justify-around px-96 py-12">
      <Button destination="/">Home</Button>
      <Button destination="/static-page">Static Page</Button>
      <Button destination="/interactive-page">Interactive Page</Button>
    </div>
  );
}
