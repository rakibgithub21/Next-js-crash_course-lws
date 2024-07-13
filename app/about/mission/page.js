import Button from "@/app/components/Button";

import thumImage from '@/public/maxresdefault.jpg'
import Image from "next/image";

const page = () => {
    
    return (
        <div>
            <h3>This is mission page</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic molestiae facere mollitia minima reprehenderit quasi aperiam veritatis aut qui fugiat doloremque blanditiis iure laboriosam quod sunt non repudiandae asperiores nostrum nesciunt rem culpa dolor, corrupti autem. Laborum voluptate error nemo cumque alias qui. Distinctio ab dolores repellat doloribus quia totam.</p>
            <Image src={thumImage} alt="Thumbnail next.js course"/>
            <Button/>
        </div>
    );
};

export default page;