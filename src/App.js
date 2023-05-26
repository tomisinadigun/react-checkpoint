import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Form from './components/Form';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <>
        <div className="container">
          <Header hClass='text-success' />
          <Form>
            <div className='mb-3'>
              <label htmlFor="" className='fs-6 fw-bold text-secondary mb-1'>Fullname</label>
              <div className="row">
                  <div className="col-lg-4 mb-2"><input type="text" placeholder='First Name' className='form-control' /></div>
                  <div className="col-lg-4 mb-2"><input type="text" placeholder='Middle Name' className='form-control' /></div>
                  <div className="col-lg-4 mb-2"><input type="text" placeholder='Last Name' className='form-control' /></div>
              </div>
            </div>
          </Form>
          <Form>
            <div>
              <label htmlFor="" className='fs-6 fw-bold text-secondary mb-1'>Address</label>
              <div className="row">
                  <div className="col-lg-4 mb-2"><input type="text" placeholder='Street' className='form-control' /></div>
                  <div className="col-lg-4 mb-2"><input type="text" placeholder='City' className='form-control' /></div>
                  <div className="col-lg-4 mb-2"><input type="text" placeholder='State' className='form-control' /></div>
              </div>
            </div>
          </Form>
          <Button btnClass="px-5 py-2 bg-success text-white fw-bold rounded-pill">Submit</Button>
        </div>
      </>
    </div>
  );
}

export default App;
