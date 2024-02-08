
import { Carousel } from "keep-react";

const TopCarousel = () => {
    return (
        <div className="grid grid-cols-2 gap-4 m-10">
                <Carousel
                    showControls={false}
                    indicatorsType="ring"
                    indicatorsTypeColors="slate"
                >
                    <img 
                    src="https://img.freepik.com/premium-photo/bearded-man-office-worker-doing-shopping-online-using-mobile-application-sitting-workplace-with-paper-shopping-bags-fast-delivery-service-indoor-studio-shot-isolated-blue-background_416530-24119.jpg?size=626&ext=jpg&ga=GA1.1.1787301885.1702146945&semt=ais"
                    alt="slider-1"
                    height={384}
                    width={440}
                    />
                    <img 
                    src="https://img.freepik.com/free-photo/surprised-man-holding-shopping-bag-showing-smartphone-screen-concept-mobile-banking-app-achievements-yellow-background_1258-66118.jpg?size=626&ext=jpg&ga=GA1.1.1787301885.1702146945&semt=ais"
                    alt="slider-2"
                    height={384}
                    width={440}
                    />
                    <img 
                    src="https://img.freepik.com/free-photo/front-view-smiling-male-housekeeper-yellow-t-shirt-holding-sale-sign-blue-isolated-wall_140725-142381.jpg?size=626&ext=jpg&ga=GA1.1.1787301885.1702146945&semt=ais"
                    alt="slider-3"
                    height={384}
                    width={440}
                    />
                </Carousel>
                <Carousel
                    showControls={false}
                    indicatorsType="ring"
                    indicatorsTypeColors="slate"
                >
                    <img 
                    src="https://img.freepik.com/free-photo/young-smiling-man-red-shirt-with-optical-glasses-holds-points-paper-bags-isolated-orange-wall_141793-35482.jpg?size=626&ext=jpg&ga=GA1.1.1787301885.1702146945&semt=ais"
                    alt="slider-3"
                    height={384}
                    width={440}
                    />
                    <img 
                    src="https://img.freepik.com/free-photo/front-view-young-male-holding-little-packages-sale-writing-yellow-background-color-present-shopping-gift-christmas-photo_140725-139780.jpg?size=626&ext=jpg&ga=GA1.1.1787301885.1702146945&semt=ais"
                    alt="slider-1"
                    height={384}
                    width={440}
                    />
                    <img 
                    src="https://img.freepik.com/free-photo/young-confused-man-red-shirt-with-optical-glasses-holds-multicoloured-paper-bags-puts-hand-chin-isolated-orange-wall_141793-35286.jpg?size=626&ext=jpg&ga=GA1.1.1787301885.1702146945&semt=ais"
                    alt="slider-2"
                    height={384}
                    width={440}
                    />
                </Carousel>
                </div>
    );
};

export default TopCarousel;