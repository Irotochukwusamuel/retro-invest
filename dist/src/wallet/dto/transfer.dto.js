"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const wallet_schema_1 = require("../schemas/wallet.schema");
class TransferDto {
    fromWallet;
    toWallet;
    amount;
    currency;
    description;
}
exports.TransferDto = TransferDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Source wallet type', enum: wallet_schema_1.WalletType }),
    (0, class_validator_1.IsEnum)(wallet_schema_1.WalletType),
    __metadata("design:type", String)
], TransferDto.prototype, "fromWallet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Destination wallet type', enum: wallet_schema_1.WalletType }),
    (0, class_validator_1.IsEnum)(wallet_schema_1.WalletType),
    __metadata("design:type", String)
], TransferDto.prototype, "toWallet", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transfer amount' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], TransferDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Currency', enum: ['naira', 'usdt'] }),
    (0, class_validator_1.IsEnum)(['naira', 'usdt']),
    __metadata("design:type", String)
], TransferDto.prototype, "currency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Transfer description', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TransferDto.prototype, "description", void 0);
//# sourceMappingURL=transfer.dto.js.map