import Button from "../components/Button";
import { HiOutlineTag } from "react-icons/hi";

function ButtonPage() {
    function handleClick() {
        console.log("click!");
    }

    return (
        <div>
            <Button primary onClick={handleClick}>
                <HiOutlineTag />
                btn primary
            </Button>

            <Button primary rounded>
                <HiOutlineTag />
                btn primary rounded
            </Button>

            <Button primary outline>
                <HiOutlineTag />
                btn primary outline
            </Button>

            <Button secondary>
                <HiOutlineTag />
                btn secondary
            </Button>

            <Button success>
                <HiOutlineTag />
                btn success
            </Button>

            <Button warning>
                <HiOutlineTag />
                btn warning
            </Button>

            <Button danger>
                <HiOutlineTag />
                btn danger
            </Button>
        </div>
    );
}

export default ButtonPage;
