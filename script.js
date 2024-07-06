(function(){



  const from = new URLSearchParams(document.location.search).get('from');
  document.getElementById('from-page').value = from;
  console.log('test');


  const toolbarOptions = [
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [
      'bold', 
      'italic', 
      'underline', 
      'strike',
      { 'script': 'sub'}, 
      { 'script': 'super' },
      'link'
    ],

  [{'align': []}, 
  { 'list': 'ordered'}, { 'list': 'bullet' }, 
  'blockquote', 'code-block'],

  [{ 'indent': '-1'}, { 'indent': '+1' }],

  [{ 'color': [] }, { 'background': [] }],

  ['clean']
];

  const editor = new Quill(
    '#editor',
    {
      placeholder: 'Write me a message...',
      modules: {
        toolbar: toolbarOptions
      },
      theme: 'snow',
    }
  );

  const form = document.querySelector('form');
  form.addEventListener('formdata', (event) => {
  // Append Quill content before submitting
  event.formData.append(
      'message', 
      editor.getSemanticHTML()
    );
  });


})();

