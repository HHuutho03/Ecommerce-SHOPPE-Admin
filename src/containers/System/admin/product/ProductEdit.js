import React, { Component } from "react";
import { connect } from "react-redux";

class ProductEdit extends Component {
  render() {
    return (
      <div className="col-md-10">
        <div className="content">
          <section className="content-header my-2">
            <h1 className="d-inline">Cập nhập sản phẩm</h1>
            <div className="mt-1 text-end">
              <a className="btn btn-sm btn-primary" href="product_index.html">
                <i className="fa fa-arrow-left"></i> Về danh sách
              </a>
            </div>
          </section>
          <section className="content-body my-2">
            <div className="row">
              <div className="col-md-9">
                <div className="mb-3">
                  <label>
                    <strong>Tên sản phẩm (*)</strong>
                  </label>
                  <input
                    type="text"
                    placeholder="Nhập tên sản phẩm"
                    name="name"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>
                    <strong>Slug (*)</strong>
                  </label>
                  <input
                    type="text"
                    placeholder="Slug"
                    name="slug"
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <label>
                    <strong>Chi tiết (*)</strong>
                  </label>
                  <textarea
                    name="detail"
                    placeholder="Nhập chi tiết sản phẩm"
                    rows="7"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label>
                    <strong>Mô tả (*)</strong>
                  </label>
                  <textarea
                    name="description"
                    rows="3"
                    className="form-control"
                    placeholder="Nhập mô tả"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box-container mt-4 bg-white">
                  <div className="box-header py-1 px-2 border-bottom">
                    <strong>Đăng</strong>
                  </div>
                  <div className="box-body p-2 border-bottom">
                    <select name="status" className="form-select">
                      <option value="1">Xuất bản</option>
                      <option value="2">Chưa xuất bản</option>
                    </select>
                  </div>
                  <div className="box-footer text-end px-2 py-2">
                    <button
                      type="submit"
                      className="btn btn-success btn-sm text-end"
                    >
                      <i className="fa fa-save" aria-hidden="true"></i> Cập nhật
                    </button>
                  </div>
                </div>
                <div className="box-container mt-2 bg-white">
                  <div className="box-header py-1 px-2 border-bottom">
                    <strong>Danh mục(*)</strong>
                  </div>
                  <div className="box-body p-2 border-bottom">
                    <select name="category_id" className="form-select">
                      <option value="">Chọn danh mục</option>
                      <option value="1">Tên danh mục</option>
                    </select>
                  </div>
                </div>
                <div className="box-container mt-2 bg-white">
                  <div className="box-header py-1 px-2 border-bottom">
                    <strong>Thương hiệu(*)</strong>
                  </div>
                  <div className="box-body p-2 border-bottom">
                    <select name="brand_id" className="form-select">
                      <option value="">Chọn thương hiêu</option>
                      <option value="1">Tên danh mục</option>
                    </select>
                  </div>
                </div>
                <div className="box-container mt-2 bg-white">
                  <div className="box-header py-1 px-2 border-bottom">
                    <strong>Giá và số lượng</strong>
                  </div>
                  <div className="box-body p-2 border-bottom">
                    <div className="mb-3">
                      <label>
                        <strong>Giá bán (*)</strong>
                      </label>
                      <input
                        type="number"
                        value="10000"
                        min="10000"
                        name="price"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label>
                        <strong>Giá khuyến mãi (*)</strong>
                      </label>
                      <input
                        type="number"
                        value="10000"
                        min="10000"
                        name="pricesale"
                        className="form-control"
                      />
                    </div>
                    <div className="mb-3">
                      <label>
                        <strong>Số lượng (*)</strong>
                      </label>
                      <input
                        type="number"
                        value="1"
                        min="1"
                        name="qty"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="box-container mt-2 bg-white">
                  <div className="box-header py-1 px-2 border-bottom">
                    <strong>Hình đại diện(*)</strong>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);
