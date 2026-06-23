import { Signer, ContractFactory, BytesLike, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetV4, AcrossFacetV4Interface } from "../AcrossFacetV4";
type AcrossFacetV4ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetV4__factory extends ContractFactory {
    constructor(...args: AcrossFacetV4ConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetV4>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetV4;
    connect(signer: Signer): AcrossFacetV4__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161233a38038061233a83398101604081905261002e91610076565b6001600160a01b0382161580610042575080155b15610060576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0390911660805260a0526100ad565b5f5f60408385031215610087575f5ffd5b82516001600160a01b038116811461009d575f5ffd5b6020939093015192949293505050565b60805160a0516122526100e85f395f818160a0015261093001525f818160ff015281816108e6015281816109df0152610a0a01526122525ff3fe608060405260043610610063575f3560e01c8063e796cd9811610041578063e796cd98146100d5578063f6503992146100ee578063f97136af14610146575f5ffd5b80631794958f14610067578063a1f1ce431461007c578063d999984d1461008f575b5f5ffd5b61007a610075366004611b96565b610161565b005b61007a61008a366004611c5c565b6103a5565b34801561009a575f5ffd5b506100c27f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b3480156100e0575f5ffd5b506100c2651f2abb7bf89b81565b3480156100f9575f5ffd5b506101217f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100cc565b348015610151575f5ffd5b506100c2670de0b6b3a764000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101dc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101ec3447611cee565b90508680610100015161022b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8761024e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610285576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036102c2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102ff576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610313895f01518a60c001518a8a3361058e565b60c08a01525f61032287611d33565b9050670de0b6b3a764000061033d60c0890160a08a01611dfd565b6fffffffffffffffffffffffffffffffff168b60c0015161035e9190611e1d565b6103689190611e34565b60808201526103778a826106d0565b504791505081811115610398576103985f846103938585611cee565b610b0f565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610420576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6104303447611cee565b9050846104558160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561048c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104c9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610506576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610544576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61055687608001518860c00151610b44565b6105688761056388611d33565b6106d0565b5047905081811115610583576105835f846103938585611cee565b50505f909155505050565b5f828082036105c9576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856105d7600185611cee565b8181106105e6576105e6611e6c565b90506020028101906105f89190611e99565b610609906080810190606001611ed5565b90505f61061582610bf8565b905073ffffffffffffffffffffffffffffffffffffffff821661063f5761063c3482611cee565b90505b5f61064a8888610c42565b90506106568888610d4c565b6106638a89898985610db8565b5f8261066e85610bf8565b6106789190611cee565b9050898110156106c2576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b61012082015161014082015151151590151514610719576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6107278360e00151611000565b90507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff16036107ed5781516107ac576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e0830151835183516040519081527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a361088a565b82610120015115801561081b5750815160a084015173ffffffffffffffffffffffffffffffffffffffff1614155b15610852576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b815161088a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60208201516108c5576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015173ffffffffffffffffffffffffffffffffffffffff166109d5577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5425c68460c001518460200151855f01517f000000000000000000000000000000000000000000000000000000000000000087606001518960c001518960800151898b60c001518c60e001518d61010001518e61012001518f61014001516040518e63ffffffff1660e01b81526004016109a29c9b9a99989796959493929190611f3a565b5f604051808303818588803b1580156109b9575f5ffd5b505af11580156109cb573d5f5f3e3d5ffd5b5050505050610ad3565b610a0883608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151611025565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5425c68360200151845f0151856040015186606001518860c001518860800151888a60c001518b60e001518c61010001518d61012001518e61014001516040518d63ffffffff1660e01b8152600401610aa59c9b9a99989796959493929190611f3a565b5f604051808303815f87803b158015610abc575f5ffd5b505af1158015610ace573d5f5f3e3d5ffd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610b029190611fb8565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b3957610b348282611051565b505050565b610b348383836110be565b805f03610b7d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bd65780341015610bd2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610bd273ffffffffffffffffffffffffffffffffffffffff8316333084611209565b5f73ffffffffffffffffffffffffffffffffffffffff821615610c3a57610c3573ffffffffffffffffffffffffffffffffffffffff831630611261565b610c3c565b475b92915050565b6060815f8167ffffffffffffffff811115610c5f57610c5f61192f565b604051908082528060200260200182016040528015610c88578160200160208202803683370190505b5090505f5f5b83811015610d4157868682818110610ca857610ca8611e6c565b9050602002810190610cba9190611e99565b610ccb906080810190606001611ed5565b9150610cd682610bf8565b838281518110610ce857610ce8611e6c565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d395734838281518110610d2157610d21611e6c565b60200260200101818151610d359190611cee565b9052505b600101610c8e565b509095945050505050565b5f5b81811015610b345736838383818110610d6957610d69611e6c565b9050602002810190610d7b9190611e99565b9050610d8d60e0820160c083016120cb565b15610daf57610daf610da56060830160408401611ed5565b8260800135610b44565b50600101610d4e565b83838383825f80805b83811015610fe457368c8c83818110610ddc57610ddc611e6c565b9050602002810190610dee9190611e99565b9050610dfd6020820182611ed5565b9350610e0f6040820160208301611ed5565b9250610eb284610e2260a08401846120e6565b610e30916004915f9161214e565b610e3991612175565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b1580610f9a5750610ee6610ecc6060830160408401611ed5565b73ffffffffffffffffffffffffffffffffffffffff161590565b158015610f1f57508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b8015610f9a575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b15610fd1576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fdb8e82611294565b50600101610dc1565b50505050610ff5848484845f611507565b505050505050505050565b5f660416edef1601be820361101c5750651f2abb7bf89b919050565b5090565b919050565b610b348383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61171e565b73ffffffffffffffffffffffffffffffffffffffff821661109e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bd273ffffffffffffffffffffffffffffffffffffffff831682611845565b73ffffffffffffffffffffffffffffffffffffffff821661110b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b632b6653dc46148015611147575073ffffffffffffffffffffffffffffffffffffffff831673a614f803b6fd780986a42c78ec9c7f77e6ded13c145b156111e8576040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff83811660048301526024820183905284169063a9059cbb906044016020604051808303815f875af11580156111be573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906111e291906121db565b50505050565b610b3473ffffffffffffffffffffffffffffffffffffffff8416838361185e565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661125457637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6112ac6112a46020830183611ed5565b6017903b1190565b6112e2576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611321576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f611335610ecc6060850160408601611ed5565b61133f575f611345565b82608001355b90505f61136061135b6080860160608701611ed5565b610bf8565b9050815f036113965761139661137c6060860160408701611ed5565b61138c6040870160208801611ed5565b8660800135611025565b5f806113a56020870187611ed5565b73ffffffffffffffffffffffffffffffffffffffff16846113c960a08901896120e6565b6040516113d79291906121f6565b5f6040518083038185875af1925050503d805f8114611411576040519150601f19603f3d011682016040523d82523d5f602084013e611416565b606091505b50915091508161142957611429816118a7565b5f61143d61135b6080890160608a01611ed5565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861146e60208a018a611ed5565b61147e60608b0160408c01611ed5565b61148e60808c0160608d01611ed5565b8b608001358987116114a057866114aa565b6114aa8a88611cee565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611516600182611cee565b81811061152557611525611e6c565b90506020028101906115379190611e99565b611548906080810190606001611ed5565b90505f5f5f5f5f5f5f5b8881101561170e5761156560018a611cee565b81108015611574575088600114155b1561164f578d8d8281811061158b5761158b611e6c565b905060200281019061159d9190611e99565b6115ae906080810190606001611ed5565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161461164f578a81815181106115f5576115f5611e6c565b602002602001015161160687610bf8565b6116109190611cee565b965073ffffffffffffffffffffffffffffffffffffffff861615611634575f611636565b895b93508387111561164f5761164f868d610393878b611cee565b8d8d8281811061166157611661611e6c565b90506020028101906116739190611e99565b611684906060810190604001611ed5565b945061168f85610bf8565b925073ffffffffffffffffffffffffffffffffffffffff8516156116b3575f6116b5565b895b915081831180156116f257508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561170657611706858d6103938587611cee565b600101611552565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156111e25773ffffffffffffffffffffffffffffffffffffffff8316611787576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156117fa573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061181e9190612205565b10156111e2576111e273ffffffffffffffffffffffffffffffffffffffff851684836118b1565b5f385f3884865af1610bd25763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661189e576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661189e575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661189e57633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156119805761198061192f565b60405290565b604051610160810167ffffffffffffffff811182821017156119805761198061192f565b5f82601f8301126119b9575f5ffd5b8135602083015f5f67ffffffffffffffff8411156119d9576119d961192f565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff82111715611a2657611a2661192f565b604052838152905080828401871015611a3d575f5ffd5b838360208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611020575f5ffd5b8015158114611a89575f5ffd5b50565b803561102081611a7c565b5f6101408284031215611aa8575f5ffd5b611ab061195c565b823581529050602082013567ffffffffffffffff811115611acf575f5ffd5b611adb848285016119aa565b602083015250604082013567ffffffffffffffff811115611afa575f5ffd5b611b06848285016119aa565b604083015250611b1860608301611a59565b6060820152611b2960808301611a59565b6080820152611b3a60a08301611a59565b60a082015260c0828101359082015260e08083013590820152611b606101008301611a8c565b610100820152611b736101208301611a8c565b61012082015292915050565b5f6101608284031215611b90575f5ffd5b50919050565b5f5f5f5f60608587031215611ba9575f5ffd5b843567ffffffffffffffff811115611bbf575f5ffd5b611bcb87828801611a97565b945050602085013567ffffffffffffffff811115611be7575f5ffd5b8501601f81018713611bf7575f5ffd5b803567ffffffffffffffff811115611c0d575f5ffd5b8760208260051b8401011115611c21575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611c44575f5ffd5b611c5087828801611b7f565b91505092959194509250565b5f5f60408385031215611c6d575f5ffd5b823567ffffffffffffffff811115611c83575f5ffd5b611c8f85828601611a97565b925050602083013567ffffffffffffffff811115611cab575f5ffd5b611cb785828601611b7f565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610c3c57610c3c611cc1565b80356fffffffffffffffffffffffffffffffff81168114611020575f5ffd5b803563ffffffff81168114611020575f5ffd5b5f6101608236031215611d44575f5ffd5b611d4c611986565b8235815260208084013590820152604080840135908201526060808401359082015260808084013590820152611d8460a08401611d01565b60a082015260c08381013590820152611d9f60e08401611d20565b60e0820152611db16101008401611d20565b610100820152611dc46101208401611d20565b61012082015261014083013567ffffffffffffffff811115611de4575f5ffd5b611df0368286016119aa565b6101408301525092915050565b5f60208284031215611e0d575f5ffd5b611e1682611d01565b9392505050565b8082028115828204841417610c3c57610c3c611cc1565b5f82611e67577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611ecb575f5ffd5b9190910192915050565b5f60208284031215611ee5575f5ffd5b611e1682611a59565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b8c81528b60208201528a60408201528960608201528860808201528760a08201528660c08201528560e082015263ffffffff851661010082015263ffffffff841661012082015263ffffffff83166101408201526101806101608201525f611fa6610180830184611eee565b9e9d5050505050505050505050505050565b60208152815160208201525f60208301516101406040840152611fdf610160840182611eee565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261201a8282611eee565b9150506060840151612044608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516120b361012085018215159052565b50610120840151801515610140850152509392505050565b5f602082840312156120db575f5ffd5b8135611e1681611a7c565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612119575f5ffd5b83018035915067ffffffffffffffff821115612133575f5ffd5b602001915036819003821315612147575f5ffd5b9250929050565b5f5f8585111561215c575f5ffd5b83861115612168575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156121d4577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f602082840312156121eb575f5ffd5b8151611e1681611a7c565b818382375f9101908152919050565b5f60208284031215612215575f5ffd5b505191905056fea2646970667358221220e618a6cf971bc0230285764cac298b16cf30dcf331694600f589b6262b4ad29364736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePoolV4";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ACROSS_CHAIN_ID_SOLANA";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "MULTIPLIER_BASE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "SPOKEPOOL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePoolV4";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "WRAPPED_NATIVE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV4.AcrossV4Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcrossV4";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV4.AcrossV4Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): AcrossFacetV4Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetV4;
}
export {};
