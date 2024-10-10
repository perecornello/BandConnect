import { Form } from "react-router-dom";

export default function EditAnnounce() {
  return (
    <>
      <Form className="EditAnnounce_Form" method="put">
        <label htmlFor="search_title">Titre de la recherche :</label>
        <input id="EditAnnounce_search_title" name="search_title" type="text" />
        <label htmlFor="instrument">Instrument :</label>
        <input id="EditAnnounce_instrument" name="instrument" type="text" />
        <label htmlFor="location">Localisation :</label>
        <input id="EditAnnounce_location" name="location" />
        <label htmlFor="description">Description :</label>
        <textarea id="EditAnnounce_description" name="description" />
        <label htmlFor="name">Nom :</label>
        <input id="EditAnnounce_name" name="name" type="text" />
        <button type="submit">Mettre à jour</button>
      </Form>
      <Form method="delete">
        <button type="submit"> Supprimer l'annonce</button>
      </Form>
    </>
  );
}
