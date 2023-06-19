export const Contact = () => {
  return (
      <>
      <div className='complainForm'>
        <div>
          <div>
            <div>
              <div>
                <div class="email_text">
                  <div class="form-group">
                    Name: <input type="text" class="email-bt" placeholder="Name" name="Email"></input>
                  </div>
                  <div class="form-group">
                    Email:  <input type="email" class="email-bt" placeholder="Email" name="Email"></input>
                  </div>
                  <div class="form-group">
                    Phone Number <input type="tel" class="email-bt" placeholder="Phone Numbar" name="Email"></input>
                  </div>
                  <div class="form-group">
                    <textarea class="massage-bt" placeholder="Massage" rows="5" id="comment" name="Massage"></textarea>
                  </div>
                  <div class="send_btn">
                    <div type="text" class="main_bt"><a href="#">SEND</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subscription-message">
          <h3>Subscribe and Save 10%</h3>
          <p>Stay updated with the latest products, promotions, and exclusive offers!</p>
          <form>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        </div>
      </>
      )
}