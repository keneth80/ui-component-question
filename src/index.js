// Import stylesheets
import './style.css';
import { retrieveUserList } from './solution/presenter/dropdown/mock/user';
import { retrieveSelectList, retrieveFavoriteById } from './solution/presenter/dropdown/mock/option';
import { DropDownList } from './solution/presenter/dropdown';


const displayUserList = (selector, data) => {
    let itemList = '';
    for (let i = 0; i < data.length; i++) {
        itemList += `
        <div>
            <span>User: ${data[i].userName}</span>,
            <span>favorites: ${retrieveFavoriteById(data[i]['favorites']).label}</span>
        </div>`
    }
    selector.innerHTML = itemList;
}

const bootstrap = () => {
    // dropdown list setup
    const dropdown = new DropDownList({
        selector: '#dropdown',
        backdrop: '.back-drop',
        idField: 'id',
        labelField: 'label',
        data: retrieveSelectList(),
        changeEvent: (event) => {
            // POINT:  refresh 즉 이벤트를 받아서 해당하는 id에 속한 데이터로 화면을 변경하시오.
            displayUserList(
                document.getElementById('userlist'),
                event.id ? 
                retrieveUserList().filter((item) => item.favorites === event.id) :
                retrieveUserList()
            );
        }
    });

    // user list display
    displayUserList(document.getElementById('userlist'), retrieveUserList());
}

bootstrap();
