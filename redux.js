const allMatches = document.querySelector(".all-matches");
const addMatch = document.querySelector(".lws-addMatch");
const deleteMatch = document.querySelector(".lws-delete");
const reset = document.querySelector(".lws-reset");

const initialState = [
    { i: 0, d: 0 },
]

// actions
const ADD_MATCH = () => ({ type: "ADD_MATCH", });
const DELETE_MATCH = (index) => ({ type: "DELETE_MATCH", payload: { ind: index } });
const RESET = () => ({ type: "RESET" });
const INCREMENT = (index, value) => ({ type: "INCREMENT", payload: { ind: index, value: parseInt(value) } });
const DECREMENT = (index, value) => ({ type: "DECREMENT", payload: { ind: index, value: parseInt(value) } });

/**
 * create reducer
 * @param {object} state 
 * @param {object} action 
 * @returns {object} state or updated state
 */
function matchReduer(state = initialState, action) {
    if (action.type === "ADD_MATCH") {
        return [...state, { i: 0, d: 0 }];
    } else if (action.type === "DELETE_MATCH") {
        return state.filter(e => state[action.payload.ind] != e);
    } else if (action.type === "INCREMENT") {
        let updatedState = [...state];
        updatedState[action.payload.ind].i = action.payload.value;
        return updatedState;
    } else if (action.type === "DECREMENT") {
        let updatedState = [...state];
        updatedState[action.payload.ind].d = action.payload.value;
        return updatedState;
    } else if (action.type === "RESET") {
        return state.map(e => e = { i: 0, d: 0 });
    } else {
        return [...state];
    }
}

const store = Redux.createStore(matchReduer);

// create render
function render() {
    let state = store.getState();

    // clear matcher before re-render
    allMatches.innerHTML = "";

    state.forEach((e, i) => {
        const match = createMatch(i, e);
        allMatches.append(match)
    });
}

// call initially
render();

// subscribe to store
store.subscribe(render);

// event listener
addMatch.addEventListener("click", () => {
    store.dispatch(ADD_MATCH())
})
// reset all
reset.addEventListener("click", () => {
    store.dispatch(RESET())
})



/**
 * Match creator
 * @param {number} index 
 * @param {object} state item on state
 * @returns {object} HTMLElement
 */
function createMatch(index = 0, state = { i: 5, d: 5 }) {
    function createWrapper(index = 0) {
        function createButton() {
            const button = document.createElement('BUTTON');
            button.className = "lws-delete";
            button.innerHTML = `<img src="./image/delete.svg" alt="" />`;
            // delete event
            button.addEventListener("click", () => {
                store.dispatch(DELETE_MATCH(index))
            });
            return button;
        }

        function createTitle(index = 0) {
            const title = document.createElement("H3");
            title.className = 'lws-matchName';
            title.innerHTML = "Match " + index;
            return title;
        }

        const wrapper = document.createElement('DIV');
        wrapper.className = 'wrapper';
        wrapper.append(createButton());
        wrapper.append(createTitle(index));
        return wrapper;
    }

    function formContainer() {
        function minValue(e) {
            if (e.target.value < 0) {
                e.target.value = 0
            }
        }

        function incrementForm() {
            const h4 = document.createElement('h4');
            h4.innerHTML = 'Increment';

            const input = document.createElement("INPUT");
            input.className = "lws-increment";
            input.name = "increment";
            input.type = "number";
            input.value = state.i;
            input.addEventListener('change', minValue)

            const form = document.createElement('FORM');
            form.className = "incrementForm";
            form.append(h4);
            form.append(input);
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                const value = formData.get("increment");
                store.dispatch(INCREMENT(index, value))
                console.log(value);
            })
            return form;
        }

        function decrementForm() {
            const h4 = document.createElement('h4');
            h4.innerHTML = 'Decrement';

            const input = document.createElement("INPUT");
            input.className = "lws-decrement";
            input.name = "decrement";
            input.type = "number";
            input.value = state.d;
            input.addEventListener('change', minValue)

            const form = document.createElement('FORM');
            form.className = "decrementForm";
            form.append(h4);
            form.append(input);
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                const value = formData.get("decrement");
                store.dispatch(store.dispatch(DECREMENT(index, value)))
                console.log(value);
            })
            return form;
        }

        const container = document.createElement('div');
        container.className = "inc-dec";
        container.append(incrementForm());
        container.append(decrementForm());
        return container;
    }

    function createTotal() {
        // total counter
        function totalCounter(obj) {
            let total = obj.i - obj.d
            if (total < 0) return 0;
            return total;
        }

        const h2 = document.createElement('H2');
        h2.className = "lws-singleResult";
        h2.innerHTML = totalCounter(state);

        const total = document.createElement('DIV');
        total.className = "numbers";
        total.append(h2);
        return total;
    }

    const match = document.createElement('DIV');
    match.className = "match";
    // match.id = index;
    match.append(createWrapper(index));
    match.append(formContainer());
    match.append(createTotal());
    return match;
}

