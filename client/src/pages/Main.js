import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import "./main.css";
// import Categories from "../components/Categories";
import { Col, Row, Container } from "../components/Grid";



class Main extends Component {

    state = {
        categories: ["Animal Feed", "Antiques", "Appliances (Large)", "Appliances (Small)", "Art", "Art Supplies", "Baby Items", "Bicycles", "Books", "Calling Cards", "Cleaning Supplies", "Clothing", "Computer Equipment", "Construction Material", "Electronics", "Food", "Food (Non-perishable)", "Furniture", "Gift Cards", "Hand Tools", "Hotel Samples", "Household Goods", "KitchenWare", "Mattresses", "Musical Instruments", "Office Supplies", "Pet Supplies", "School Supplies", "Sewing Machines", "Storage Bins/Containers", "Toiletries", "Tools", "Toys", "Vehicles", "Warehouse Space"],
        selections: [],
        noSelections: true
    }

    // when component mounts, sort the state
    componentDidMount() {
        // sort the categories and then set the state.. 
        // console.log(this.state.categories);
        // var sorted = this.state.categories.sort();
        // this.setState({ categories: sorted });
        // console.log(this.state.categories);
    };


    // UPDATE ONCE CONNECTED TO DB
    // SHOULD CAPTURE THE DATA MAKE A GET REQUEST
    searchButtonClick() {

        // prints out the current array of user selections
        // search button
        var currentState = this.state.selections;
        console.log(currentState);


    };

    // ARROW FUNCTIONS FIX THE 'THIS' SCOPE ISSUE
    categoryButtonClick = (e) => {

        // use currentTarget instead of target to get button value
        var clicked = e.currentTarget.value;

        // CHECK IF BUTTON HAS ALREADY BEEN CLICKED, IF NOT PUSH INTO SELECTIONS ARRAY
        if (!(this.state.selections.includes(clicked))) {
            console.log("not already a selection");
            this.state.selections.push(clicked);
            this.setState({ noSelections: false });
        }


    };


    clearSelections() {
        // SET SELECTIONS STATE EQUAL TO AN EMPTY ARRAY
        this.setState({ selections: [] });
    };


    removeCategory = category => {
        // FITLER THE CURRENT SELECTIONS FOR THE DELETED CATEGORY AND SET STATE EQUAL TO THE RETURNED ARRAY
        const categories = this.state.selections.filter(selection => selection !== category);

        this.setState({ selections: categories });
    };



    render() {
        return (
            <div className="main">
                <Jumbotron >
                    <h1 className="display-1" style={{ color: "white" }}><span id="D">D</span><span id="C">C</span><span id="lutter">lutter</span></h1>
                    <p className="lead" style={{ color: "white" }}>Get rid of things that dont bring you joy and fulfilment</p>
                    <hr id="mainHR"></hr>
                    <p className="navLinks ">
                     <span id="addCharityNav">
                    <a href="/">
                    <svg viewBox="0 0 32 32" class="icon icon-home" viewBox="0 0 32 32" aria-hidden="true"><path d="M27 18.039L16 9.501 5 18.039V14.56l11-8.54 11 8.538v3.481zm-2.75-.31v8.251h-5.5v-5.5h-5.5v5.5h-5.5v-8.25L16 11.543l8.25 6.186z"/></svg>                   
                     </a> 
                     </span>
                     <span id="divide">|</span>
                     <span id="addCharityNav"><a href="/add"> Add Charity</a> </span></p>

                </Jumbotron>

                <div className="searchContainer">
                    <Container>
                        <Row>
                            <Col size="col-md-9">
                                <Container>
                                    <Row>
                                        {/* <Col size="col-md-3"></Col> */}
                                        <Col size="col-md-12">
                                            <h2 id="categorySelect">SELECT CATEGORIES</h2>
                                            <div className="searchSelectionDiv">

                                                <div className="categoryButtons">
                                                    {this.state.categories.map((category) => <button key={category} name="currentSelection" value={category} type="button" onClick={this.categoryButtonClick} className="btn btn-outline-dark categoryButton">{category}</button>)}
                                                </div>

                                            </div>{/* end searchSelectionDiv */}
                                        </Col>
                                        {/* <Col size="col-md-3"></Col> */}
                                    </Row>
                                </Container>

                            </Col>
                            <Col size="col-md-3 text-center">
                                <Container>
                                    <Row>
                                        {/* <Col size="col-md-3"></Col> */}
                                        <Col size="col-md-12 ">
                                            <h2 id="categorySelected">SELECTIONS</h2>

                                            <div className="chosenCategories">

                                                <div className="chosenButtons">
                                                    <hr id="charityHR"></hr>
                                                    {this.state.selections.map((category) =>
                                                        <div className="aButton">
                                                            <p key={category} id={category} className=" pickedCategoryButton">{category}
                                                                <span className="deleteX" onClick={() => this.removeCategory(category)} >
                                                                    ✘
                                                                </span>
                                                            </p>
                                                            <hr id="charityHR"></hr>
                                                        </div>
                                                    )}
                                                </div> {/* end chosenButtons */}

                                                <button type="button" className="btn btn-outline-info clearButton" onClick={() => this.clearSelections()}>Clear All</button>
                                                <button type="button" className="btn btn-outline-success searchButton" onClick={() => this.searchButtonClick()}><span role="img" aria-label="Search">🔍Search</span></button>

                                            </div> {/* chosenCategories */}

                                        </Col>
                                        {/* <Col size="col-md-3"></Col> */}
                                    </Row>
                                </Container>

                            </Col>
                        </Row>
                    </Container>







                    <div className="doTheSearch">
                        <div className="container text-center">

                            <br></br>
                            <a href="/results" className="btn btn-primary viewResults" role="button">View Results</a>

                        </div>
                    </div>

                </div> {/** end searchContainer **/}
            </div> /* end main */

        ); // end return
    } // end render
} // end Main


export default Main;