<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
           role="dialog"
           aria-labelledby="modalTitle"
           aria-describedby="modalDescription"
      >
        <header class="modal-header"
                id="modalTitle"
        >
          <slot name="header">
            <input type="file">
          </slot>
          <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
          >
            x
          </button>
        </header>

        <section class="modal-body"
                 id="modalDescription"
        >
          <slot name="body">
<!--            Title: <input type="text" class="input_title">-->
            <div class="form__group field">
              <input type="text" class="form__field" autocomplete="off" placeholder="Name" name="name" required />
              <label class="form__label">Name</label>
            </div>
            <br>
            <div class="form__group field">
            <input type="text" class="form__field" autocomplete="off" placeholder="Title" name="name" required />
            <label class="form__label">Title</label>
          </div>
          </slot>
        </section>

        <footer class="modal-footer">
          <slot name="footer">
            <div class="form__group field">
              <input type="text" class="form__field" autocomplete="off" placeholder="Description" name="name" required />
              <label class="form__label">Description</label>
            </div>
          </slot>
          <div class="buttons_modal">
            <button
                type="button"
                class="btn-green"
                @click="close"
                aria-label="Close modal"
            >
              Close Modal
            </button>
            <button
                type="button"
                class="btn-green"
                @click="create"
            >
              Create Cart
            </button>
          </div>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    close() {
      this.$emit('close');
    },
    create() {
      alert("yes")
    }
  },
};
</script>

<style scoped lang="scss">
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity .5s ease;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.name_inp{
  margin-top: 10px;
}

.modal {
  background: #00171f;
  box-shadow: 2px 2px 20px 5px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 35%;
  border-radius: 20px;
}

.modal-header,
.modal-footer {
  padding: 15px;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.input_title{
  padding: 5px;
  border-radius: 5px;
  border: 3px solid crimson;
  margin-left: 10px;
  cursor: pointer;
  &:focus{
    border-color: black;
  }
}

.modal-footer {
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
  text-align: right;
}

.btn-close {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4AAE9B;
  background: transparent;
}

.buttons_modal{
  padding-top: 10px;
  margin-top: 10px;
}

.btn-green {
  color: black;
  background: #fca311;
  border: 1px solid #fca311;
  border-radius: 20px;
  padding: 10px 15px;
  margin: 5px 7px;
  cursor: pointer;
  font-weight: 600;
  font-size: 15px;
}

$primary: #11998e;
$secondary: #38ef7d;
$white: #fff;
$gray: #9b9b9b;
.form__group {
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  //width: 50%;
}

.form__field {
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid $gray;
  outline: 0;
  font-size: 1.3rem;
  color: white;
  padding: 5px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
    color: white;
  }
}

.form__label {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: white;
}

.form__field:focus {
  ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $primary;
    font-weight:700;
  }
  font-weight: 700;
  border-width: 3px;
  border-image: linear-gradient(to right, $primary,$secondary);
  border-image-slice: 1;
}
/* reset input */
.form__field{
  &:required,&:invalid { box-shadow:none; }
}
</style>
