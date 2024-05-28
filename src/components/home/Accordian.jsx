

const Accordian = () => {
  return (
    <div>
      <h1 className="mx-5 my-5 font-bold text-center">Frequently As<span className="text-primary">k</span>ed Question</h1>
         <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked /> 
  <div className="collapse-title text-xl font-medium">
  Are they the right size?
  </div>
  <div className="collapse-content"> 
    <p>Shoe size varies by manufacturer. Have a professional measure your shoe size and look for a thumb’s width of room in the toe box from your longest toe. Think about it, if you had to wear a pair of gloves all day, you would need enough room for your fingers to spread out to complete your daily activities. Our feet should have enough room in our shoes so they can carry us all day long! Shoes that are too small or too big can cause friction calluses, wounds, compression injuries, and limit proper movement of the toes. In shoes with buckles and straps, make sure they aren’t cinched too tight. Cinching laces and buckles too tightly can lead to compression on the nerves of the foot.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Are they too soft?
  </div>
  <div className="collapse-content text-wrap"> 
    <p> Memory foam is all the rage right now! Wearing collapsible, soft, “pillow-like” inserts and shoes are popular, but dangerous. They do not provide stability for the foot. They predispose us to injuries like stress fractures and Plantar Fasciitis.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
  Are they right for my activity?
  </div>
  <div className="collapse-content"> 
    <p>There are a host of activity specific shoes, and it is important to do a little research before buying shoes for sports such as running or tennis. If your sport requires wearing cleats or spikes, find stud types for the ground you will be playing on most often (soft, hard, firm, or turf) and wear longer cleats for wet surfaces. A good quality foot bed and snug synthetic or leather upper will decrease blisters and sliding injuries in the shoe.</p>
  </div>
</div>
    </div>
  )
}

export default Accordian
