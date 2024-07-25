document.addEventListener('DOMContentLoaded', function() {
    const treeContainer = document.querySelector('.tree');

    
    const nodesData = [
        { type: 'node', children: [
            { type: 'button', class: 'topic-button', dataNumber: 'Entschuldigung', text: 'Entschuldigung' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'topic-button', dataNumber: 'Ja-Nein', text: 'Ja-Nein' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'toggle-button', text: '+' },
            { type: 'button', class: 'topic-button', dataNumber: 'Termin', text: 'Termin' }
        ]},
        { type: 'sub-node', children: [
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'termin_dialog', text: 'Es gibt leider innerhalb dieser Woche keinen freien Termin mehr' }
            ]}
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'toggle-button', text: '+' },
            { type: 'button', class: 'topic-button', dataNumber: 'schwierige Wörter', text: 'Wörter' }
        ]},
        { type: 'sub-node', children: [
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Sache1', text: 'Sache1' },
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Sache2', text: 'Sache2' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Sache3', text: 'Sache3 - Sätze' },
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Sache4', text: 'Sache4' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Gegensatz1', text: 'Gegensatz1 - On/Off' },
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Gegensatz2', text: 'Gegensatz2' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Gegensatz3', text: 'Gegensatz3' },
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Gegensatz4', text: 'Gegensatz4' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'Beruf', text: 'Beruf' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Dokumente', text: 'Dokumente' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Tiere', text: 'Tiere' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Lebensmittel', text: 'Lebensmittel' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Korper', text: 'Korper' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Farbe', text: 'Farbe' }
            ]}
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'topic-button', dataNumber: 'Partikeln', text: 'Partikeln' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'toggle-button', text: '+' },
            { type: 'button', class: 'topic-button', dataNumber: 'Verb1', text: 'Verben' }
        ]},
        { type: 'sub-node', children: [
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Verb2', text: 'Verb2' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'Verb3', text: 'Verb3' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'Verb4', text: 'Verb4' }
            ]}
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'toggle-button', text: '+' },
            { type: 'button', class: 'topic-button', dataNumber: 'Verkehrsmittel', text: 'Verkehrsmittel' }
        ]},
        { type: 'sub-node', children: [
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Route', text: 'Route' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'Durchsage - Zug verspäten', text: 'Durchsage - Zug verspäten' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'PONS_dtz_CD1___Track_07', text: 'Durchsage - Achtung, Autofahrer!' }
            ]}
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'topic-button', dataNumber: 'Beschreibung', text: 'Beschreibung' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'topic-button', dataNumber: '3', text: 'Kann helfen?' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'toggle-button', text: '+' },
            { type: 'button', class: 'topic-button', dataNumber: 'Telefongespräch', text: 'Telefongespräch' }
        ]},
        { type: 'sub-node', children: [
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'Spielen zusammen', text: 'Spielen wir zusammen Fußball?' }
            ]}
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'toggle-button', text: '+' },
            { type: 'button', class: 'topic-button', dataNumber: 'Freue mich', text: 'Freue mich' }
        ]},
        { type: 'sub-node', children: [
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub', dataNumber: 'schluss', text: 'schluss' }
            ]}
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'toggle-button', text: '+' },
            { type: 'button', class: 'topic-button', dataNumber: 'Wetter', text: 'Wetter' }
        ]},
        { type: 'sub-node', children: [
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'Jarhezeit Wetter', text: 'Jarhezeit Wetter' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'In den Monaten Dezember, Januar und Februar__', text: 'In den Monaten Dezember, Januar und Februar...' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'Wetter in Deutschland und meinem Land', text: 'Wetter in Deutschland und meinem Land' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'Lippe', text: 'Lippe' }
            ]}
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'topic-button', dataNumber: 'Einkaufen', text: 'Einkaufen' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'topic-button', dataNumber: 'Reisen', text: 'Reisen' }
        ]},


        { type: 'node', children: [
            { type: 'button', class: 'toggle-button', text: '+' },
            { type: 'button', class: 'topic-button', dataNumber: 'Gesund', text: 'Gesund' }
        ]},
        { type: 'sub-node', children: [
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Beim Arzt', text: 'Beim Arzt' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub', dataNumber: 'In der Apotheke', text: 'In der Apotheke' }
            ]}
        ]},


        { type: 'node', children: [
            { type: 'button', class: 'toggle-button', text: '+' },
            { type: 'button', class: 'topic-button', dataNumber: 'Ich', text: 'Ich' }
        ]},
        { type: 'sub-node', children: [
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'Vorstellen1', text: 'Vorstellen' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'Das ist mein Bett__', text: 'Das ist mein Bett...' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'mein Tag', text: 'mein Tag' }
            ]}
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'toggle-button', text: '+' },
            { type: 'button', class: 'topic-button', dataNumber: 'Alltag', text: 'Alltag' }
        ]},
        { type: 'sub-node', children: [
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'Geldautomat', text: 'Geldautomat' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'Einkaufen1', text: 'Wie viel kosten die Tomaten' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub2', dataNumber: 'Einkaufen2', text: 'Schau mal, in dem Prospekt sind gute Angebote' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub', dataNumber: 'Buchstaben', text: 'Buchstaben' }
            ]}
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'topic-button', dataNumber: 'Werden-waren', text: 'werden-waren' }
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'toggle-button', text: '+' },
            { type: 'button', class: 'topic-button-zero', text: 'Test' }
        ]},
        { type: 'sub-node', children: [
            { type: 'node', children: [
                { type: 'button', class: 'topic-button-sub3', dataNumber: 'Akk-Dat-Gen1', text: 'Akk-Dat-Gen1' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button', text: 'Тема 9.1dsasadsadsadsadsad' }
            ]},
            { type: 'node', children: [
                { type: 'button', class: 'topic-button', text: 'Тема 9.2dsadsa fdsfdsfds fdsfdsfds dfdsf fdsfdsfdsfds fdsfdsfdsfdsf fdsfdsfdsfdsfds dfdsf dsf dsadsad  sadsadsadsa  dsadsadsadsadsads dsadasdsadsadsadsadsad' }
            ]}
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'toggle-button', text: '+' },
            { type: 'button', class: 'topic-button', dataNumber: 'Wohnung', text: 'Wohnung' }
        ]},
        { type: 'sub-node', children: [
            { type: 'node', children: [
                { type: 'button', class: 'topic-button', text: 'Тема 10.1dsasadsadsadsadsad' }
            ]}
        ]},
        { type: 'node', children: [
            { type: 'button', class: 'topic-button', dataNumber: 'Audio Thema 1', text: 'Audio Thema 1' }
        ]}
    ];

    function createNode(data) {
        const node = document.createElement('div');
        node.className = 'node';
        data.children.forEach(childData => {
            const button = document.createElement('button');
            button.className = childData.class;
            if (childData.dataNumber) button.dataset.number = childData.dataNumber;
            button.textContent = childData.text;
            node.appendChild(button);
        });
        return node;
    }

    function createSubNode(data) {
        const subNode = document.createElement('div');
        subNode.className = 'sub-node';
        data.children.forEach(childData => {
            subNode.appendChild(createNode(childData));
        });
        return subNode;
    }

    nodesData.forEach(data => {
        if (data.type === 'sub-node') {
            treeContainer.appendChild(createSubNode(data));
        } else {
            treeContainer.appendChild(createNode(data));
        }
    });
});
