var Messages = {
  props: ['messages'],
  template: `

  <div class="messages text-left">
    <el-alert type="error" v-if="errorMessages.length>0">
      <ul>
        <li  v-for="message in errorMessages" v-html="$t(message.messageKey)"></li>
      </ul>
    </el-alert>
    <el-alert type="success" v-if="successMessages.length>0">
      <ul>
        <li  v-for="message in successMessages" v-html="$t(message.messageKey)"></li>
      </ul>
    </el-alert>
    <el-alert type="info" v-if="infoMessages.length>0">
      <ul>
        <li  v-for="message in infoMessages" v-html="$t(message.messageKey)"></li>
      </ul>
    </el-alert>
    <el-alert  type="warning" v-if="warningMessages.length>0">
      <ul>
        <li  v-for="message in warningMessages" v-html="$t(message.messageKey)"></li>
      </ul>
    </el-alert>
  </div>

  `,
  computed: {
    errorMessages: function () {
      let errorMessages = []
      this.messages.forEach(function (message) {
        if (message.messageCategory === 'ERROR') {
          errorMessages.push(message)
        }
      })
      return errorMessages
    },
    warningMessages: function () {
      let warningMessages = []
      this.messages.forEach(function (message) {
        if (message.messageCategory === 'WARNING') {
          warningMessages.push(message)
        }
      })
      return warningMessages
    },
    infoMessages: function () {
      let infoMessages = []
      this.messages.forEach(function (message) {
        if (message.messageCategory === 'INFO') {
          infoMessages.push(message)
        }
      })
      return infoMessages
    },
    successMessages: function () {
      let successMessages = []
      this.messages.forEach(function (message) {
        if (message.messageCategory === 'SUCCESS') {
          successMessages.push(message)
        }
      })
      return successMessages
    }
  }
}
export { Messages }
