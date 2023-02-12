<template>
    <div>
        <el-button type="text" @click="centerDialogVisible = true">Click to open the Dialog</el-button>

        <el-dialog title="Warning" :visible.sync="centerDialogVisible" width="30%" center>
            <span>It should be noted that the content will not be aligned in center by
                default</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">Cancel</el-button>
                <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            centerDialogVisible: false,
        };
    },
};
</script>
