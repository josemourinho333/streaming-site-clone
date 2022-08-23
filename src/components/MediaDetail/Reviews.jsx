const Reviews = (props) => {

  const reviewItems = props?.reviews?.map((item,index) => {
    const avatar = item.author_details.avatar_path 
      ? <img src={`https://image.tmdb.org/t/p/original/${item.author_details.avatar_path}`} alt="avatar" className='w-[90px] h-[90px] rounded-full'/> 
      : <img src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSan6PgQ9X0b2AGu0J7bOxMKG5hadzv3tujzCnXXRPsZlhKF4-d40-NX5AhdEZMMbqNyFM&usqp=CAU`} alt="avatar" className='w-[90px] h-[90px] rounded-full' /> 

    return (
      <div key={index} className='review-item flex my-4'>
        <div className="review-avatar w-1/6">{avatar}</div>
        <div className="review-details flex flex-col w-5/6 px-3">
          <div className="review-name text-sm font-semibold">review by <span className='text-indigo-500 font-semibold text-lg'>{item.author}</span></div>
          <div className="review-content font-light text-sm mt-2">{item.content}</div>
        </div>
      </div>
    )
  })

  return (
    <div className="reviews-container px-3 my-5 flex flex-col">
      <div className="reviews-title font-semibold text-indigo-500">Reviews</div>
      <div className="reviews-list">
        {reviewItems}
      </div>
    </div>
  )
};

export default Reviews;