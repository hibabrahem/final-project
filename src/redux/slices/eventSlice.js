import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    services: [{
        name: "Marriage", descrption:"L'union sacrée de deux cœurs.", img: "https://thumbs.dreamstime.com/b/couples-de-mariage-2782051.jpg"
    },
    {
        name: "Anniversaire", descrption:
            "Fête de l'amour et de la complicité."




, img: "https://img.freepik.com/photos-premium/ballons-pour-decoration-fete-fond-fete-anniversaire-decoration-ballon-confetti-anniversaire-serpentin_372999-8675.jpg"
    },
    {
        name: "Seminaire", descrption:
            "Rassemblement de talents et d'innovations pour l'avancement collectif.", img: "https://www.brisontraiteur.com/wp-content/uploads/2021/12/visuel_seminaire.jpg"
    }],
    mariages: [
        {
            name: "jour j", descrption:
                "Le grand jour où les rêves prennent vie.", img: "https://static.wixstatic.com/media/a2c93b_32d500fd39f64bfc90739f1b6f14a8f3~mv2.jpg", prix: "1500£"
        },

        {
            name: "fiancaille", descrption: "L'étape précieuse vers l'union éternelle.", img: "https://static.wixstatic.com/media/a2c93b_0455ec19229c4ee7a5d2378ba2b2bd0b~mv2.jpg", prix: "800£"
        }
    ],
    anniversaire: [
        {
            name: "enfant", descrption:
                "Une journée magique où les rires et les sourires illuminent le chemin de l'enfance.", img: "https://static.wixstatic.com/media/a2c93b_26a329c01a0d47ca9a5969762a271efd~mv2.png", prix: "400£"
        },
        {
            name: "adulte", descrption:
                "Célébration de la maturité et des souvenirs à venir.", img: "https://static.wixstatic.com/media/a2c93b_816cb877818b45cd8157f09210866dbf~mv2.jpg", prix: "500£"
        }
    ],
    evenement: [
        {
            name: "conference", descrption:
                "Plateforme d'échange et de partage pour l'innovation et l'apprentissage.", img: "https://www.shrm.org/adobe/dynamicmedia/deliver/dm-aid--e385041a-705e-440c-b406-f1a5a1bf4515/istock-1340856781.jpg", prix: "700£"
        },
        {
            name: "fete d'entreprise", descrption:
                "Un moment de convivialité et de cohésion au sein de l'entreprise.", img: "https://static.wixstatic.com/media/a2c93b_ac536822019646b8b75f96369245b3f9~mv2.jpg", prix: "600£"
        }
    ],
    listImageM: [
        {
            img: "https://i.pinimg.com/564x/a6/2d/f7/a62df7d920b06f22cfba60caf07f706b.jpg", name: "fete d'entreprise"
        },
        {
            img: "https://i.pinimg.com/564x/07/a1/c7/07a1c794eedb54cc068f6b7f363a6054.jpg", name: "fete d'entreprise"
        },
        {
            img: "https://i.pinimg.com/564x/3d/8d/b8/3d8db8f3b8ce7c1536de21e3407bfe99.jpg", name: "fete d'entreprise"
        }, {
            img: "https://i.pinimg.com/564x/07/1b/d5/071bd573f1c5b1990e6da60fac1ac66a.jpg", name: "fete d'entreprise"
        }, {
            img: "https://i.pinimg.com/564x/43/de/bb/43debb5414396fc9e5c22058bb6fcaa6.jpg", name: "fete d'entreprise"
        },
        {
            img: "https://i.pinimg.com/564x/91/77/8b/91778bc1bd55df33ed258a68486f032d.jpg", name: "fete d'entreprise"
        },
        {
            img: "https://i.pinimg.com/236x/bc/df/12/bcdf1238037c4cf742d7ca7ebf75de29.jpg", name: "fete d'entreprise"
        }, {
            img: "https://i.pinimg.com/564x/05/ed/b9/05edb97dfc8238519eaf14dd30a99f1b.jpg", name: "fete d'entreprise"
        }
    ],
    listImageA: [
        {
            img: "https://i.pinimg.com/236x/54/14/96/541496fb3efa3b96040fad55e98b258d.jpg", name: "fete d'entreprise"
        },
        {
            img: "https://i.pinimg.com/236x/dc/9d/8b/dc9d8b6b0799d5371d909ff6fcf4036c.jpg", name: "fete d'entreprise"
        },
        {
            img: "https://i.pinimg.com/236x/70/d9/1f/70d91fb8258e06a913e62b21aa3b4327.jpg", name: "fete d'entreprise"
        }, {
            img: "https://i.pinimg.com/236x/a9/e8/c4/a9e8c4cb5757c464f50ebb64b5e63e8a.jpg", name: "fete d'entreprise"
        }, {
            img: "https://i.pinimg.com/236x/5d/40/a7/5d40a7ef9ebb230e7c75ce8702850bbf.jpg", name: "fete d'entreprise"
        },
        {
            img: "https://i.pinimg.com/236x/57/41/83/574183ba69f6532d80d6049087f16b7b.jpg", name: "fete d'entreprise"
        },
        {
            img: "https://i.pinimg.com/236x/cd/96/5c/cd965ccff7670441f5304b9f3a148460.jpg", name: "fete d'entreprise"
        }, {
            img: "https://i.pinimg.com/236x/65/cf/6e/65cf6e9fb2c2d15a0dcfa8e8a38502c6.jpg", name: "fete d'entreprise"
        }
    ],
    listImageE: [
        {
            img: "https://i.pinimg.com/564x/0e/53/b2/0e53b26b4186e9749a031ab2166b34fc.jpg", name: "fete d'entreprise"
        },
        {
            img: "https://i.pinimg.com/564x/16/0a/7d/160a7dd002fa9b6f14d2aeb8ae5ec821.jpg", name: "fete d'entreprise"
        },
        {
            img: "https://i.pinimg.com/236x/a2/bc/7a/a2bc7a79d3b8dc57fc436aef34a79792.jpg", name: "fete d'entreprise"
        }, {
            img: "https://i.pinimg.com/564x/5d/89/f1/5d89f1108522e09aca94da91c8695ed6.jpg", name: "fete d'entreprise"
        }, {
            img: "https://i.pinimg.com/564x/76/0d/22/760d2259cfd7fd3820df48e0565cedcf.jpg", name: "fete d'entreprise"
        },
        {
            img: "https://i.pinimg.com/564x/ba/be/1a/babe1ab0a008e227ce8207f57577d223.jpg", name: "fete d'entreprise"
        },
        {
            img: "https://i.pinimg.com/564x/f1/25/3f/f1253f472dcceee630be8d11c965050c.jpg", name: "fete d'entreprise"
        }, {
            img: "https://i.pinimg.com/564x/d6/2e/fe/d62efe474233532b5a93a3c70fbc72d9.jpg", name: "fete d'entreprise"
        }
    ],
    reservationData: [],
    reservationEData: {

        name: '',
        theme: '',
        date: '',
        heure: '',
        localisation: ''
    },
    reservationAData: {

        name: '',
        theme: '',
        date: '',
        heure: '',
        localisation: ''
    }

}


export const eventSlice = createSlice(
    {
        name: 'event',
        initialState,
        reducers: {
            addReservationData: (state, action) => {
                state.reservationData = action.payload; // Remplacez les données de réservation par les nouvelles données
            },
            addReservationAData: (state, action) => {
                state.reservationAData = action.payload; // Remplacez les données de réservation par les nouvelles données
            },
            addReservationEData: (state, action) => {
                state.reservationEData = action.payload; // Remplacez les données de réservation par les nouvelles données
            },
           

        }




    }

)
export const { addReservationData, addReservationEData, addReservationAData } = eventSlice.actions;

export default eventSlice.reducer