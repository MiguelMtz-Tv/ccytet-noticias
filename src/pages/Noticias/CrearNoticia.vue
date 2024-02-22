<template>
    <div class="mb-4 w-full flex justify-between items-center">
        <div><span class="text-lg font-bold">Noticias</span> / <span class="text-blue-500">Crer noticia</span></div>
        <div>
            <a-button type="primary" ghost>Publicar noticia</a-button>
        </div>
    </div>

    <div class="w-full">
        <div class="mb-3">Titulo</div>
        <a-input :v-model="titulo" class="w-full mb-4" placeholder="Ingresa el titulo"/>
    </div>

    <ckeditor id="editor" :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>

    <div class="mt-4">
        <div class="mb-3">Cargar imagenes</div>
        <a-upload
          v-model:file-list="fileList"
          list-type="picture-card"
          @preview="handlePreview"
        >
          <div v-if="fileList!.length < 8">
            <plus-outlined />
            <div style="margin-top: 8px">Añadir</div>
          </div>
        </a-upload>
        <a-modal :open="previewVisible" :title="previewTitle" :footer="null" @cancel="handleCancel">
          <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
    </div>
</template>

<script setup lang="ts">
import { defineModel,  } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { PlusOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
import type { UploadProps } from 'ant-design-vue';

// Titulo
const titulo = ref('')

// Configura el editor con el módulo de carga de imágenes
const editor = ClassicEditor
const editorData = defineModel(() => '')
const editorConfig = {
}

function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

// Configurar carga de imagenes
const previewVisible = ref(false);
const previewImage = ref('');
const previewTitle = ref('');

const fileList = ref<UploadProps['fileList']>([
  {
    uid: '-1',
    name: 'image.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  }
]);

const handleCancel = () => {
  previewVisible.value = false;
  previewTitle.value = '';
};

const handlePreview = async (file: UploadProps['fileList'][number]) => {
  if (!file.url && !file.preview) {
    file.preview = (await getBase64(file.originFileObj)) as string;
  }
  previewImage.value = file.url || file.preview;
  previewVisible.value = true;
  previewTitle.value = file.name || file.url.substring(file.url.lastIndexOf('/') + 1);
};
</script>

<style>
.ck-editor__editable_inline {
    min-height: 300px;
}
</style>