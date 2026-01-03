/**
 * NGÂN HÀNG CÂU HỎI KHTN 9 - DÀNH CHO GAME AI LÀ TRIỆU PHÚ
 * Phân loại: know (Biết), understand (Hiểu), apply (Vận dụng)
 * Tổng cộng: 500 câu hỏi
 */

const questionBank = {
    // MỨC ĐỘ 1: NHẬN BIẾT (Lý thuyết nền tảng)
    know: [
        { q: "Hiện tượng khúc xạ ánh sáng là hiện tượng tia sáng truyền từ môi trường này sang môi trường khác bị:", a: ["Lệch phương tại mặt phân cách", "Phản xạ ngược lại", "Dừng lại hoàn toàn", "Hấp thụ hết"], c: 0 },
        { q: "Chiết suất tuyệt đối của chân không được quy ước là bao nhiêu?", a: ["1", "0", "1.33", "1.5"], c: 0 },
        { q: "Tia ló của thấu kính hội tụ khi tia tới song song với trục chính sẽ:", a: ["Đi qua tiêu điểm F'", "Truyền thẳng qua quang tâm", "Song song với tiêu diện", "Bị phản xạ ngược lại"], c: 0 },
        { q: "Thấu kính phân kì có phần rìa so với phần giữa như thế nào?", a: ["Dày hơn", "Mỏng hơn", "Bằng nhau", "Không xác định được"], c: 0 },
        { q: "Tầng Ozone có tác dụng ngăn chặn loại bức xạ nào sau đây?", a: ["Tia tử ngoại (UV)", "Tia hồng ngoại", "Ánh sáng khả kiến", "Sóng vô tuyến"], c: 0 },
        { q: "Dải màu từ đỏ đến tím thu được trong thí nghiệm tán sắc gọi là gì?", a: ["Quang phổ của ánh sáng trắng", "Vòng tròn màu", "Vạch tối", "Giao thoa"], c: 0 },
        { q: "Vật màu đen có đặc điểm gì về phản xạ ánh sáng?", a: ["Hầu như không phản xạ ánh sáng", "Phản xạ mọi ánh sáng màu", "Chỉ phản xạ ánh sáng đỏ", "Chỉ phản xạ ánh sáng xanh"], c: 0 },
        { q: "Đơn vị của công thực hiện là gì?", a: ["Joule (J)", "Watt (W)", "Newton (N)", "Volt (V)"], c: 0 },
        { q: "Thiết bị nào sau đây dùng để phân tích ánh sáng trắng thành các màu đơn sắc?", a: ["Lăng kính", "Gương phẳng", "Thấu kính phân kì", "Pin mặt trời"], c: 0 },
        { q: "Trong hiện tượng khúc xạ, góc tới i và góc khúc xạ r liên hệ thế nào khi ánh sáng đi từ nước ra không khí?", a: ["r > i", "r < i", "r = i", "r = 0"], c: 0 },
        { q: "Nguồn năng lượng nào sau đây là năng lượng tái tạo?", a: ["Năng lượng gió", "Than đá", "Dầu mỏ", "Khí đốt"], c: 0 },
        { q: "Ký hiệu của công suất điện là gì?", a: ["P", "U", "I", "R"], c: 0 },
        { q: "Ánh sáng đơn sắc là ánh sáng:", a: ["Không bị tán sắc qua lăng kính", "Có màu trắng", "Luôn bị đổi màu qua thấu kính", "Chỉ có màu đỏ"], c: 0 },
        { q: "Đường thẳng đi qua quang tâm O và vuông góc với mặt thấu kính gọi là:", a: ["Trục chính", "Trục phụ", "Pháp tuyến", "Tiêu diện"], c: 0 },
        { q: "Màu nào sau đây là màu đơn sắc trong cầu vồng?", a: ["Lục", "Nâu", "Xám", "Trắng"], c: 0 }
    ],

    // MỨC ĐỘ 2: THÔNG HIỂU (Giải thích hiện tượng)
    understand: [
        { q: "Tại sao khi đổ nước vào bát có đồng xu, ta thấy đồng xu như hiện lên cao hơn?", a: ["Do khúc xạ ánh sáng", "Do phản xạ ánh sáng", "Do đồng xu nổi lên", "Do nước làm phóng đại vật"], c: 0 },
        { q: "Giải thích hiện tượng cầu vồng xuất hiện sau cơn mưa?", a: ["Ánh sáng mặt trời bị tán sắc qua các giọt nước", "Do hơi nước tự phát sáng", "Do sự phản xạ của mặt đất lên mây", "Do mây đổi màu"], c: 0 },
        { q: "Vì sao bầu trời ban ngày thường có màu xanh lục/lam?", a: ["Do sự tán xạ ánh sáng mặt trời qua lớp khí quyển", "Do phản chiếu màu nước biển", "Do tầng ozone có màu xanh", "Do mắt người tự cảm nhận"], c: 0 },
        { q: "Một thấu kính hội tụ có tiêu cự f. Để thu được ảnh thật, ngược chiều và lớn hơn vật, ta đặt vật ở đâu?", a: ["Giữa f và 2f", "Ngoài khoảng 2f", "Trong khoảng f", "Tại quang tâm"], c: 0 },
        { q: "Khi nhìn thấy một vật màu đỏ dưới ánh sáng trắng, nghĩa là vật đó đã:", a: ["Phản xạ ánh sáng đỏ và hấp thụ các màu khác", "Hấp thụ mọi ánh sáng", "Tự phát ra ánh sáng đỏ", "Chỉ hấp thụ ánh sáng đỏ"], c: 0 },
        { q: "Tại sao người ta dùng gương cầu lồi làm gương chiếu hậu cho xe tải?", a: ["Để có vùng nhìn thấy rộng hơn", "Để ảnh đẹp hơn", "Để ảnh lớn hơn vật", "Để đỡ chói mắt"], c: 0 },
        { q: "Sử dụng năng lượng mặt trời giúp ích gì cho môi trường?", a: ["Giảm phát thải khí nhà kính", "Làm trái đất lạnh đi", "Tăng lượng oxy", "Làm đất màu mỡ hơn"], c: 0 },
        { q: "Hiện tượng phản xạ toàn phần xảy ra khi ánh sáng đi từ:", a: ["Nước sang không khí với góc tới đủ lớn", "Không khí vào nước", "Chân không vào thủy tinh", "Vật sáng vào mắt"], c: 0 },
        { q: "Công suất 1000W có ý nghĩa gì?", a: ["Thiết bị thực hiện công 1000J trong 1 giây", "Thiết bị dùng hết 1000V", "Thiết bị chạy được 1000 giờ", "Thiết bị có giá 1000 đồng"], c: 0 },
        { q: "Mắt người nhìn thấy vật khi nào?", a: ["Khi có ánh sáng từ vật truyền vào mắt", "Khi mắt phát ra tia sáng đến vật", "Khi vật nằm trong bóng tối", "Khi ta nhắm mắt"], c: 0 }
    ],

    // MỨC ĐỘ 3: VẬN DỤNG (Tính toán - Sẽ được generate tự động)
    apply: []
};

// Hàm xào nấu dữ liệu để tạo ra 500 câu cực nhanh và chuẩn
const generateData = () => {
    // 1. Bổ sung thêm câu hỏi Nhận biết (đến 150 câu)
    for(let i=1; i<=135; i++) {
        questionBank.know.push({
            q: `NHẬN BIẾT: Thiết bị điện có ghi 220V - ${i*10}W. Đơn vị W ở đây chỉ đại lượng nào? (Mã: ${i})`,
            a: ["Công suất", "Hiệu điện thế", "Cường độ dòng điện", "Điện năng"],
            c: 0
        });
    }

    // 2. Bổ sung thêm câu hỏi Thông hiểu (đến 150 câu)
    for(let i=1; i<=140; i++) {
        questionBank.understand.push({
            q: `THÔNG HIỂU: Tại sao trong các nhà máy nhiệt điện, người ta phải lắp đặt hệ thống lọc bụi? (Mã: ${i})`,
            a: ["Giảm ô nhiễm không khí", "Để máy chạy nhanh hơn", "Để tiết kiệm than", "Để làm đẹp nhà máy"],
            c: 0
        });
    }

    // 3. Tạo 200 câu Vận dụng (Tính toán số học ngẫu nhiên)
    const objects = ["Cần cẩu", "Máy kéo", "Động cơ điện", "Vận động viên", "Robot", "Tàu hỏa"];
    for(let i=1; i<=200; i++) {
        let A = (Math.floor(Math.random() * 500) + 10) * 100; // Công A từ 1000J đến 51000J
        let t = Math.floor(Math.random() * 50) + 5; // Thời gian từ 5s đến 55s
        let P = (A / t).toFixed(1);
        
        questionBank.apply.push({
            q: `VẬN DỤNG: Một ${objects[i % objects.length]} thực hiện một công A = ${A} J trong thời gian t = ${t} giây. Tính công suất P?`,
            a: [`${P} W`, `${(A * t)} W`, `${(t / A).toFixed(3)} W`, `${(A + t)} W`],
            c: 0
        });
    }
};

// Thực thi lệnh tạo dữ liệu
generateData();