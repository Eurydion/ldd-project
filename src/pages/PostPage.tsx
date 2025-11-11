import { useParams } from 'react-router-dom';

function PostPage() {
    const { id } = useParams(); // this is the dynamic part of the URL
    
    return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold">Event Details</h1>
      <p className="mt-2 text-gray-600">You are viewing event with ID: {id}</p>
    </div>
  );

 
}

export default PostPage;
