import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AllBridgeFacet, AllBridgeFacetInterface } from "../AllBridgeFacet";
declare type AllBridgeFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AllBridgeFacet__factory extends ContractFactory {
    constructor(...args: AllBridgeFacetConstructorParams);
    deploy(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AllBridgeFacet>;
    getDeployTransaction(_allBridge: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AllBridgeFacet;
    connect(signer: Signer): AllBridgeFacet__factory;
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051611cbf380380611cbf833981016040819052602b91603b565b6001600160a01b03166080526066565b5f60208284031215604a575f5ffd5b81516001600160a01b0381168114605f575f5ffd5b9392505050565b608051611c3361008c5f395f81816105ed0152818161062d01526107260152611c335ff3fe608060405260043610610028575f3560e01c8063a74ccb351461002c578063e40f246014610041575b5f5ffd5b61003f61003a36600461170e565b610054565b005b61003f61004f3660046117bc565b610281565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100cf576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6100df3447611809565b90508680610100015161011e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b878061012001511561015c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8861017f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101f3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610230576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102448a5f01518b60c001518b8b336104a1565b60c08b01526102538a886105e3565b504791505081811115610274576102745f8461026f8585611809565b61083b565b50505f9091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016102fc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61030c3447611809565b9050846103318160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610368576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036103a5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036103e2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610420576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561045e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047088608001518960c00151610870565b61047a88886105e3565b504791505081811115610496576104965f8461026f8585611809565b50505f909155505050565b5f828082036104dc576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f85856104ea600185611809565b8181106104f9576104f9611841565b905060200281019061050b919061186e565b61051c9060808101906060016118aa565b90505f61052882610924565b905073ffffffffffffffffffffffffffffffffffffffff82166105525761054f3482611809565b90505b5f61055d888861096e565b90506105698888610a78565b6105768a89898985610ae4565b5f8261058185610924565b61058b9190611809565b9050898110156105d5576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b61061682608001517f00000000000000000000000000000000000000000000000000000000000000008460c00151610ca6565b61062660e0820160c083016118ca565b15610724577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd836080015173ffffffffffffffffffffffffffffffffffffffff165f1b8460c0015184602001358560400135866060013587608001358860a00160208101906106b091906118e3565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e08a901b1681526106f297969594939291908b359060040161193a565b5f604051808303815f87803b158015610709575f5ffd5b505af115801561071b573d5f5f3e3d5ffd5b50505050610800565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16634cd480bd825f0135846080015173ffffffffffffffffffffffffffffffffffffffff165f1b8560c0015185602001358660400135876060013588608001358960a00160208101906107ad91906118e3565b5f6040518a63ffffffff1660e01b81526004016107d198979695949392919061193a565b5f604051808303818588803b1580156107e8575f5ffd5b505af11580156107fa573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161082f91906119cf565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff8316610865576108608282610cd2565b505050565b610860838383610d3f565b805f036108a9576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661090257803410156108fe576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6108fe73ffffffffffffffffffffffffffffffffffffffff8316333084610dad565b5f73ffffffffffffffffffffffffffffffffffffffff8216156109665761096173ffffffffffffffffffffffffffffffffffffffff831630610e05565b610968565b475b92915050565b6060815f8167ffffffffffffffff81111561098b5761098b6114d9565b6040519080825280602002602001820160405280156109b4578160200160208202803683370190505b5090505f5f5b83811015610a6d578686828181106109d4576109d4611841565b90506020028101906109e6919061186e565b6109f79060808101906060016118aa565b9150610a0282610924565b838281518110610a1457610a14611841565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610a655734838281518110610a4d57610a4d611841565b60200260200101818151610a619190611809565b9052505b6001016109ba565b509095945050505050565b5f5b818110156108605736838383818110610a9557610a95611841565b9050602002810190610aa7919061186e565b9050610ab960e0820160c083016118ca565b15610adb57610adb610ad160608301604084016118aa565b8260800135610870565b50600101610a7a565b83838383825f5b81811015610c8c57368a8a83818110610b0657610b06611841565b9050602002810190610b18919061186e565b9050610b47610b2d60608301604084016118aa565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610ba95750610ba9610b6060408301602084016118aa565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610bc05750610bc0610b6060208301836118aa565b8015610c435750610c43610bd760a0830183611ae2565b610be5916004915f91611b4a565b610bee91611b71565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610c79576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c838c82610e38565b50600101610aeb565b5050610c9b848484845f6110ab565b505050505050505050565b6108608383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6112c2565b73ffffffffffffffffffffffffffffffffffffffff8216610d1f576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108fe73ffffffffffffffffffffffffffffffffffffffff8316826113ef565b73ffffffffffffffffffffffffffffffffffffffff8216610d8c576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61086073ffffffffffffffffffffffffffffffffffffffff84168383611408565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610df857637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b610e50610e4860208301836118aa565b6017903b1190565b610e86576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003610ec5576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610ed9610b2d60608501604086016118aa565b610ee3575f610ee9565b82608001355b90505f610f04610eff60808601606087016118aa565b610924565b9050815f03610f3a57610f3a610f2060608601604087016118aa565b610f3060408701602088016118aa565b8660800135610ca6565b5f80610f4960208701876118aa565b73ffffffffffffffffffffffffffffffffffffffff1684610f6d60a0890189611ae2565b604051610f7b929190611bd7565b5f6040518083038185875af1925050503d805f8114610fb5576040519150601f19603f3d011682016040523d82523d5f602084013e610fba565b606091505b509150915081610fcd57610fcd81611451565b5f610fe1610eff6080890160608a016118aa565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861101260208a018a6118aa565b61102260608b0160408c016118aa565b61103260808c0160608d016118aa565b8b60800135898711611044578661104e565b61104e8a88611809565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f86826110ba600182611809565b8181106110c9576110c9611841565b90506020028101906110db919061186e565b6110ec9060808101906060016118aa565b90505f5f5f5f5f5f5f5b888110156112b25761110960018a611809565b81108015611118575088600114155b156111f3578d8d8281811061112f5761112f611841565b9050602002810190611141919061186e565b6111529060808101906060016118aa565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146111f3578a818151811061119957611199611841565b60200260200101516111aa87610924565b6111b49190611809565b965073ffffffffffffffffffffffffffffffffffffffff8616156111d8575f6111da565b895b9350838711156111f3576111f3868d61026f878b611809565b8d8d8281811061120557611205611841565b9050602002810190611217919061186e565b6112289060608101906040016118aa565b945061123385610924565b925073ffffffffffffffffffffffffffffffffffffffff851615611257575f611259565b895b9150818311801561129657508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156112aa576112aa858d61026f8587611809565b6001016110f6565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156113e95773ffffffffffffffffffffffffffffffffffffffff831661132b576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa15801561139e573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113c29190611be6565b10156113e9576113e973ffffffffffffffffffffffffffffffffffffffff8516848361145b565b50505050565b5f385f3884865af16108fe5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611448576390b8ec185f526004601cfd5b5f603452505050565b8051602082018181fd5b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611448575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661144857633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561152a5761152a6114d9565b60405290565b5f82601f83011261153f575f5ffd5b813567ffffffffffffffff811115611559576115596114d9565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff811182821017156115a6576115a66114d9565b6040528181528382016020018510156115bd575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146115fc575f5ffd5b919050565b803580151581146115fc575f5ffd5b5f6101408284031215611621575f5ffd5b611629611506565b823581529050602082013567ffffffffffffffff811115611648575f5ffd5b61165484828501611530565b602083015250604082013567ffffffffffffffff811115611673575f5ffd5b61167f84828501611530565b604083015250611691606083016115d9565b60608201526116a2608083016115d9565b60808201526116b360a083016115d9565b60a082015260c0828101359082015260e080830135908201526116d96101008301611601565b6101008201526116ec6101208301611601565b61012082015292915050565b5f60e08284031215611708575f5ffd5b50919050565b5f5f5f5f6101208587031215611722575f5ffd5b843567ffffffffffffffff811115611738575f5ffd5b61174487828801611610565b945050602085013567ffffffffffffffff811115611760575f5ffd5b8501601f81018713611770575f5ffd5b803567ffffffffffffffff811115611786575f5ffd5b8760208260051b840101111561179a575f5ffd5b602091909101935091506117b186604087016116f8565b905092959194509250565b5f5f61010083850312156117ce575f5ffd5b823567ffffffffffffffff8111156117e4575f5ffd5b6117f085828601611610565b92505061180084602085016116f8565b90509250929050565b81810381811115610968577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff218336030181126118a0575f5ffd5b9190910192915050565b5f602082840312156118ba575f5ffd5b6118c3826115d9565b9392505050565b5f602082840312156118da575f5ffd5b6118c382611601565b5f602082840312156118f3575f5ffd5b8135600481106118c3575f5ffd5b60048110611936577f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b9052565b5f610100820190508982528860208301528760408301528660608301528560808301528460a083015261197060c0830185611901565b8260e08301529998505050505050505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f602083015161014060408401526119f6610160840182611983565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611a318282611983565b9150506060840151611a5b608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611aca61012085018215159052565b50610120840151801515610140850152509392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611b15575f5ffd5b83018035915067ffffffffffffffff821115611b2f575f5ffd5b602001915036819003821315611b43575f5ffd5b9250929050565b5f5f85851115611b58575f5ffd5b83861115611b64575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015611bd0577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b818382375f9101908152919050565b5f60208284031215611bf6575f5ffd5b505191905056fea2646970667358221220f6d6b8c1836f111728f73b593a7c4da48c1eb926c7de019e428b3d6f4bd1227b64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_allBridge";
            readonly type: "address";
            readonly internalType: "contract IAllBridge";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAllBridge";
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
            readonly name: "_allBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly components: readonly [{
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiveToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "messenger";
                readonly type: "uint8";
                readonly internalType: "enum IAllBridge.MessengerProtocol";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAllBridge";
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
            readonly name: "_allBridgeData";
            readonly type: "tuple";
            readonly internalType: "struct AllBridgeFacet.AllBridgeData";
            readonly components: readonly [{
                readonly name: "fees";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "recipient";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "receiveToken";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonce";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "messenger";
                readonly type: "uint8";
                readonly internalType: "enum IAllBridge.MessengerProtocol";
            }, {
                readonly name: "payFeeWithSendingAsset";
                readonly type: "bool";
                readonly internalType: "bool";
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
        readonly name: "InvalidContract";
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
    static createInterface(): AllBridgeFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AllBridgeFacet;
}
export {};
