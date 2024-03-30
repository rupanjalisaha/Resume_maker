window.onload = function() {
    document.getElementById("print_cv").addEventListener("click",()=>{
        const resume = this.document.getElementById("cv-template");
        console.log(resume);
        console.log(window);
        var opt={
            margin: 1,
            filename: 'Resume.pdf',
            image: {type: 'jpeg', quality: 0.98},
            html2canvas: {scale: 2, logging: true,
                letterRendering: true,
                useCORS: true,},
            jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
        }
        html2pdf().set(opt).from(resume).toPdf().save();
    })
}