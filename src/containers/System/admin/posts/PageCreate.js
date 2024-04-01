import React, { Component } from "react";
import { connect } from "react-redux";
import { languages, CRUD, CommonUtils } from "../../../../utils";
import { savePost } from "../../../../services/userService";
import { toast } from "react-toastify";
class PageCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      detail: "",
      slug: "",
      image: "",
      status: "",
      topic_id: "",
    };
  }

  async componentDidUpdate(prevProps, prevState) {}

  handleOnChange = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState(
      {
        ...copyState,
      },
      () => {}
    );
    console.log("check state", this.state);
  };
  handleGetFile = async (event) => {
    let data = event.target.files;
    let file = data[0];
    if (file) {
      let base64 = await CommonUtils.getBase64(file);
      this.setState({
        image: base64,
      });
    }
  };

  handleSaveTopic = async () => {
    let res = await savePost({
      title: this.state.title,
      detail: this.state.detail,
      topic_id: this.state.topic_id,
      description: this.state.description,
      image: this.state.image,
      status: this.state.status,
    });
    if (res && res.errCode === 0) {
      toast.success("save post successfully");
    } else {
      toast.error("save post failed");
    }
  };
  render() {
    return (
      <div className="col-md-10">
        <div className="content">
          <section className="content-header my-2">
            <h1 className="d-inline">Thêm trang đơn</h1>
            <div className="text-end">
              <a href="page_index.html" className="btn btn-sm btn-success">
                <i className="fa fa-arrow-left"></i> Về danh sách
              </a>
            </div>
          </section>
          <section className="content-body my-2">
            <div className="row">
              <div className="col-md-9">
                <div className="mb-3">
                  <label>
                    <strong>Tiêu đề bài viết (*)</strong>
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Nhập tiêu đề"
                  />
                </div>
                <div className="mb-3">
                  <label>
                    <strong>Chi tiết (*)</strong>
                  </label>
                  <textarea
                    name="detail"
                    rows="7"
                    className="form-control"
                    placeholder="Nhập chi tiết"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label>
                    <strong>Mô tả (*)</strong>
                  </label>
                  <textarea
                    name="description"
                    rows="4"
                    className="form-control"
                    placeholder="Mô tả"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box-container mt-4 bg-white">
                  <div className="box-header py-1 px-2 border-bottom">
                    <strong>Đăng</strong>
                  </div>
                  <div className="box-body p-2 border-bottom">
                    <p>Chọn trạng thái đăng</p>
                    <select name="status" className="form-select">
                      <option value="1">Xuất bản</option>
                      <option value="2">Chưa xuất bản</option>
                    </select>
                  </div>
                  <div className="box-footer text-end px-2 py-3">
                    <button
                      type="submit"
                      className="btn btn-success btn-sm text-end"
                    >
                      <i className="fa fa-save" aria-hidden="true"></i> Đăng
                    </button>
                  </div>
                </div>
                <div className="box-container mt-2 bg-white">
                  <div className="box-header py-1 px-2 border-bottom">
                    <strong>Hình đại diện</strong>
                  </div>
                  <div className="box-body p-2 border-bottom">
                    <input type="file" name="image" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PageCreate);