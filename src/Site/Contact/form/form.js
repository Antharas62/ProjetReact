
//FORMULAIRE CONTACT

function Form(){
    return (
        <div className="container-fluid">
                <form method="get">
                    <div className="form-group mt-3">
                        <label for=""></label>
                        <small id="helpId" class="form-text text-muted">Nom</small>
                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Votre nom" />
                    </div>
                    <div className="form-group mt-3">
                        <label for=""></label>
                        <small id="helpId" class="form-text text-muted">Email</small>
                        <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Votre email" />
                    </div>
                    <div className="form-group mt-3">
                        <label for=""></label>
                        <small id="helpId" class="form-text text-muted">Message</small>
                        <textarea class="form-control" name="" id="" rows="5"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
    );
}

export default Form;