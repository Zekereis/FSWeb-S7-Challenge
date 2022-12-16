import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import pizzaResmi from "../assets/Pizza.png";


const schema = yup.object().shape({
    name: yup
        .string()
        .required("pizza is required")
        .min(6, "pizza needs to be 6 characters min"),
    size: yup.mixed().oneOf(["Small Size","Medium Size","Large Size"], "size seçin"),
    sauce: yup.mixed().oneOf(["Pesto Sos", "Bbq Sauce", "Alfredo Sauce", "Spice Sauce"], "You must select a sauce"),
    malzeme1: yup.boolean().oneOf([true,false],"seç"),
    malzeme2: yup.mixed().oneOf([true,false],"seç"),
    malzeme3: yup.mixed().oneOf([true,false],"seç"),
    malzeme4: yup.mixed().oneOf([true,false],"seç"),

    ozel: yup
        .string()
        .required("ozel is required")
        .min(6, "ozel needs to be 6 characters min"),
});

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        size: "",
        sauce: "",
        malzeme1: false, malzeme2: false, malzeme3: false, malzeme4: false,
        ozel: ""
    });
    const [userList,setUserList] = useState("");
    const [disabled, setDisabled] = useState(true);
    const [gelenCevap,setGelenCevap] = useState(null);

    const [errorMessages, setErrorMessages] = useState({
        name: "",
        size: "",
        sauce: "",
        malzeme1: false, malzeme2: false, malzeme3: false, malzeme4: false,
        ozel: ""
    });


    useEffect(() => {
        schema.isValid(formData).then((valid) => setDisabled(!valid));
    }, [formData]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newUser = {
            name: formData.name.trim(),
            size: formData.size,
            sauce: formData.sauce,
            malzeme1: formData.malzeme1,
            malzeme2: formData.malzeme2,
            malzeme3: formData.malzeme3,
            malzeme4: formData.malzeme4,

        };

        axios.post("https://reqres.in/api/users", formData)
        .then((res) => {
            setUserList(res.data);
            console.log(`User ID: ${res.data.id}`);
            setGelenCevap(res.data);
            setFormData({
                name: "",
                size: "",
                sauce: "",
                malzeme1: false, malzeme2: false, malzeme3: false, malzeme4: false,
                ozel: ""
            });


        });
    };
    console.log(gelenCevap);
    const checkError = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then(() => setErrorMessages({ ...errorMessages, [name]: "" }))
            .catch((err) =>
                setErrorMessages({ ...errorMessages, [name]: err.errors[0] })
            );
    };

    const handleChange = (event) => {
        const { name, type, checked, value } = event.target;

        const valueToUse = type === "checkbox" ? checked : value;

        checkError(name, valueToUse);
        console.log("a",name,value);
        setFormData({
            ...formData,
            [name]: valueToUse
        });
    };
    console.log(formData);
    return (
        <>
            <div>
                <div >
                    <div class="kopernik">
                        <h1 >Kopernik Pizza</h1>
                    <Link to="/"><button type="button">Menu</button></Link>
                    </div>
                    <img id="pizza" src={pizzaResmi} />
                </div>

                {gelenCevap?(

                    <div>
                        <h2>Your order is preparing</h2>
                        <p>Pizza Name: {userList.name}</p>
                        <p>Pizza Size: {userList.size}</p>
                        <p>Pizza Sauce: {userList.sauce}</p>
                        <p>Extra Materials: {userList.malzeme1}</p>
                        <p>{userList.malzeme2}</p>
                        <p>{userList.malzeme3}</p>
                        <p>{userList.malzeme4}</p>
                        <p>Special Request: {userList.ozel}</p>
                    </div>
                
                ):(
                <form onSubmit={handleSubmit}  >
                    <h1>Please choose what you want</h1>
                    <p>
                        <label>
                            Pizza Name:&nbsp;
                            <input className="action-email"
                                type="text"
                                name="name"
                                placeholder="Please write here"
                                value={formData.fullname}
                                onChange={handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Choice of size:&nbsp;
                            <select id="cy-drop" name="size" value={formData.size} onChange={handleChange}>
                                <option value="Small Size">Small size</option>
                                <option value="Medium Size">Medium size</option>
                                <option value="Large Size">Large size</option>
                            </select>
                        </label>

                    </p>
                    <p>
                        <h2>Choice of Sauce</h2>
                        <br />
                        <label>
                            <input
                                type="radio"
                                name="sauce"
                                value="Pesto Sos"
                                checked={formData.sauce === "Pesto Sos"}
                                onChange={handleChange}
                            />
                            Pesto Sauce
                        </label>
                        <br />
                        <label>
                            <input
                                type="radio"
                                name="sauce"
                                value="Bbq Sauce"
                                checked={formData.sauce === "Bbq Sauce"}
                                onChange={handleChange}
                            />
                            &nbsp;BBQ Sauce
                        </label>
                        <br />
                        <label>
                            <input
                                type="radio"
                                name="sauce"
                                value="Alfredo Sauce"
                                checked={formData.sauce === "Alfredo Sauce"}
                                onChange={handleChange}
                            />
                            &nbsp;Alfredo Sauce
                        </label>
                        <br />
                        <label>
                            <input
                                type="radio"
                                name="sauce"
                                value="Spice Sauce"
                                checked={formData.sauce === "Spice Sauce"}
                                onChange={handleChange}
                            />
                            &nbsp;Spice Sauce
                        </label>
                    </p>
                    <h2>Extra materials</h2>
                    <p>
                        <label>
                            Extra Sucuk&nbsp;
                            <input
                                value="malzeme1"
                                type="checkbox"
                                name="malzeme1"
                                id="malzeme1"
                                checked={formData.malzeme1=== true}
                                onChange={handleChange}
                            />
                        </label>
                    </p><p>
                        <label>
                            Extra Chicken&nbsp;
                            <input
                                type="checkbox"
                                name="malzeme2"
                                id="malzeme2"
                                checked={formData.malzeme2=== true}
                                onChange={handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Ekstra Mozarella&nbsp;
                            <input
                                type="checkbox"
                                name="malzeme3"
                                id="malzeme3"
                                checked={formData.malzeme3=== true}
                                onChange={handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <label>
                            Ekstra Pepper&nbsp;
                            <input
                                type="checkbox"
                                name="malzeme4"
                                id="malzeme4"
                                checked={formData.malzeme4=== true}
                                onChange={handleChange}
                            />
                        </label>
                    </p>
                    <h2>Other </h2>
                    <p>
                        <label>
                            Special Request:&nbsp;
                            <input className="cy-ozel"
                                type="text"
                                name="ozel"
                                placeholder="Please write here"
                                value={formData.fullname}
                                onChange={handleChange}
                            />
                        </label>
                    </p>
                    <p>
                        <input type="submit" value="Create Order" disabled={disabled} />
                    </p>

                    <p>
                        {errorMessages.name}
                        {errorMessages.size}
                        {errorMessages.sauce}
                        {errorMessages.ozel}
                    </p>
                </form>)}
            </div>
        </>




    )
}

